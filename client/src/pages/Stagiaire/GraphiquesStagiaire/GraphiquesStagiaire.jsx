import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavStagiaire } from "../../../Components/Navs/NavStagiaire";
import './GraphiquesStagiaire.css';

export const GraphiquesStagiaire = () => {
    const [questionnaires, setQuestionnaires] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3000/api/evaluation/mes-evaluations", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (!response.ok) {
                setError("Erreur lors du chargement des graphiques");
                return;
            }

            const evaluations = await response.json();
            const questionnairesMap = new Map();
            for (const evaluation of evaluations) {
                questionnairesMap.set(evaluation.Questionnaire.id, evaluation.Questionnaire);
            }
            setQuestionnaires([...questionnairesMap.values()]);
        })();
    }, []);

    return (
        <>
            <NavStagiaire />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul className="list-questionnaire">
                {questionnaires.map(questionnaire => (
                    <li className='questionnaire' key={questionnaire.id}>
                        <Link to={`/le-graphique/${questionnaire.id}`}><h2>{questionnaire.titre}</h2></Link>
                    </li>
                ))}
            </ul>
        </>
    )
};
