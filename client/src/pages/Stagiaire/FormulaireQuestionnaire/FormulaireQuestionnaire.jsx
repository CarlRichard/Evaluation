import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { NavStagiaire } from "../../../Components/Navs/NavStagiaire";
import { Valider } from "../../../Components/Boutons/Valider/Valider";
import './FormulaireQuestionnaire.css';

export const FormulaireQuestionnaire = () => {
    const params = useParams();
    const [questionnaire, setQuestionnaire] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3000/api/questionnaire/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (!response.ok) {
                setError("Erreur lors du chargement du questionnaire");
                return;
            }

            setQuestionnaire((await response.json()).questionnaire);
        })();
    }, []);

    return (
        <>
            <NavStagiaire />
            {error && <p style={{ color: "red" }}>{error}</p>}
            {questionnaire && <>
                <h2>{questionnaire.titre}</h2>
                <ul className="encadrer-vert">
                    {questionnaire.Questions.map(question => (
                        <li key={question.titre}>
                            <h3 className="titre-question">{question.titre} : {question.description}</h3>
                            <div className="radio-contenaire">
                                {[...Array(10)].map((e, i) =>
                                    <label className="radio">
                                        {i}
                                        <input type="radio" name={`reponse-${question.QuestionnaireQuestion.id_question}`} key={i} />
                                    </label>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </>}
            <Link to={'/feedback-questionnaire'}><Valider /></Link>
        </>
    )
}