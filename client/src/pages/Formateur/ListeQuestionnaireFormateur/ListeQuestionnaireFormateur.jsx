import { NavFormateur } from "../../../Components/Navs/NavFormateur"

export const ListQuestionnaireFormateur = () => {
    return (
        <>
            <NavFormateur />

            <h1>Les questionnaires</h1>

            <div>
                <p>Afficher par date de création du questionnaire:</p>
                <span>du <input type="date" /></span>
                <span>au <input type="date" /></span>
            </div>
        </>
    )
}