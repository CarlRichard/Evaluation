import './ListeQuestionnaireFormateur.css'
import { NavFormateur } from "../../../Components/Navs/NavFormateur"
import { Valider } from '../../../Components/Boutons/Valider/Valider'
import { useEffect, useState } from 'react';

export const ListeQuestionnaireFormateur = () => {

    let tokenUser = localStorage.getItem("token");

    const [questionnaires, setQuestionnaires] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/questionnaire', {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenUser}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.questionnaires)
                setQuestionnaires(data.questionnaires)
            })
            .catch(console.error)
    }, [])

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

            <section className='list-questionnaire'>
                {questionnaires.map(questionnaire =>
                    <div className='questionnaire'>
                        <p className='titre-questionnaire'>{questionnaire.titre}</p>
                    </div>
                )}
            </section>
        </>
    )
}