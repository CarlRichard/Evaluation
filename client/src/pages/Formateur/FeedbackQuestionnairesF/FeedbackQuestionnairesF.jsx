import { AccueilOrange } from "../../../Components/Boutons/Accueil/AccueilOrange";
import "./FeedbackQuestionnairesF.css"


export const FeedbackQuestionnairesF = ({ setAuthenticated }) => {
   
    return (
        <>
       <nav className='nav-formateur'>
                       <AccueilOrange/>
                   </nav>
       <div className="fond-vert">
            <p className="text-feedback">Votre questionnaires à bien été enregistré.</p>
       </div>
       <button className="confirm-button" type="submit" >Retour aux stagiaires</button>
       <button className="button-questionnaire" type="submit" >Voir le graphique</button>
        </>
    );
};