import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavStagiaire } from "../../../Components/Navs/NavStagiaire";

export const QuestionnaireStagiaire = () => {
    const [questionnaires, setQuestionnaires] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3000/api/questionnaire", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (!response.ok) {
                setError("Erreur lors du chargement des questionnaires");
                return;
            }

            setQuestionnaires((await response.json()).questionnaires);
        })();
    }, []);

    return (
        <>
            <NavStagiaire />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul className="list-questionnaire">
                {questionnaires.map(questionnaire => (
                    <li className='questionnaire' key={questionnaire.id}>
                        <Link to={`/formulaire-questionnaire/${questionnaire.id}`}><h2>{questionnaire.titre}</h2></Link>
                    </li>
                ))}
            </ul>
        </>
    )
};
