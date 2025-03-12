import { Link } from "react-router-dom";
import "./FeedbackQuestionnaires.css"
import { NavStagiaire3 } from "../../../Components/Navs/NavStagiaire3";


export const FeedbackQuestionnaires = ({ setAuthenticated }) => {

    return (
        <>
            <NavStagiaire3 />
            <div className="fond-vert">
                <p className="text-feedback">Votre questionnaires à bien été enregistré.</p>
            </div>
            <button className="button-questionnaire" type="submit" ><Link to={'/questionnaires-stagiaire'}>Retour aux questionnaires</Link></button>
            <button className="button-graphique" type="submit" ><Link to={'/graphiques-stagiaire'}>Voir le graphique</Link></button>
        </>
    );
};