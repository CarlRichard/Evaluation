import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js";

export const LeGraphique = () => {
    Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)
    const params = useParams();
    const [evaluation, setEvaluation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3000/api/evaluation/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (!response.ok) {
                setError("Erreur lors du chargement du graphique");
                return;
            }

            setEvaluation((await response.json()).evaluation);
        })();
    }, []);

    return (
        <>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {evaluation && <> <Bar options={{
                responsive: true,
                plugins: { legend: { position: "top" }, title: { display: true, text: 'Graphique 1' } }
            }} data={{
                labels: evaluation.reponse.map(reponse => reponse.question.titre),
                datasets: [
                    {
                        id: 1,
                        label: 'test',
                        data: evaluation.reponse.map(reponse => reponse.rep),
                    }
                ]
            }}></Bar>
            </>}
        </>
    )
}
