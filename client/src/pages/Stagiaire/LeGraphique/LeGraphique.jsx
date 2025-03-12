import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js";
import "./LeGraphique.css";
import { NavStagiaire } from "../../../Components/Navs/NavStagiaire";

export const LeGraphique = () => {
    Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)
    const params = useParams();
    const [evaluations, setEvaluations] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3000/api/evaluation/mes-evaluations`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (!response.ok) {
                setError("Erreur lors du chargement du graphique");
                return;
            }

            setEvaluations((await response.json()).filter(evaluation => evaluation.Questionnaire.id === Number(params.id)));
        })();
    }, []);

    return (
        <>
            <NavStagiaire />
            <div className="graphique-contenaire">
                {error && <p style={{ color: "red" }}>{error}</p>}
                {evaluations && <Bar
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: "top"
                            },
                            title: {
                                display: true,
                                text: 'Graphique',
                                font: {
                                    size: 18
                                }
                            }
                        },
                        scales: {
                            y: {
                                min: 0,
                                max: 10,
                            }
                        }
                    }}
                    data={{
                        labels: evaluations.map(evaluation =>
                            evaluation.Questionnaire.Questions.find(question =>
                                question.Reponses.some(reponse =>
                                    reponse.id === evaluation.id_reponse
                                )
                            )
                        ).filter(evaluation => evaluation !== undefined)
                            .map(evaluation => evaluation.titre),
                        datasets: [
                            {
                                id: 1,
                                label: 'test',
                                data: evaluations.map(evaluation =>
                                    evaluation.Questionnaire.Questions.find(question =>
                                        question.Reponses.some(reponse => reponse.id === evaluation.id_reponse)
                                    )
                                ).filter(evaluation => evaluation !== undefined)
                                    .map(evaluation => evaluation.Reponses[0].rep),
                            }
                        ]
                    }}
                ></Bar>
                }
            </div>
            <button className='btnRetour'><Link to={'/graphiques-stagiaire'}>Retour</Link></button>
        </>
    )
}
