import './ListeQuestionnaireFormateur.css'
import { NavFormateur } from "../../../Components/Navs/NavFormateur"
import { Valider } from '../../../Components/Boutons/Valider/Valider'

export const ListQuestionnaireFormateur = () => {
    return (
        <>
            <NavFormateur />

            <h1>Les questionnaires</h1>

            <div className="date-banner">
                <p>Afficher par date de création du questionnaire:</p>
                <p>du <input className="date-questionnaire" type="date" /></p>
                <p>au <input className="date-questionnaire" type="date" /></p>
                <Valider />
            </div>
        </>
    )
}