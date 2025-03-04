import { AccueilGreen } from "../../../Components/Boutons/Accueil/AccueilGreen";
import "./FeedbackQuestionnaires.css"


export const FeedbackQuestionnaires = ({ setAuthenticated }) => {
   
    return (
        <>
       <nav className='nav-stagiaire'>
                       <AccueilGreen/>
                   </nav>
       <div className="fond-vert">
            <p className="text-feedback">Votre questionnaires à bien été enregistré.</p>
       </div>
       <button className="confirm-button" type="submit" >Retour aux questionnaires</button>
       <button className="button-questionnaire" type="submit" >Voir le graphique</button>
        </>
    );
};