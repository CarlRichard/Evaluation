import { useEffect, useState } from "react";
import { NavStagiaire } from "../../../Components/Navs/NavStagiaire"

export const ResponseStagiaire = () => {

    let tokenUser = localStorage.getItem('token');

    const [questionnaires, setQuestionnaires] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/questionnaire/${id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenUser}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.questionnaires)
                setQuestion(data.questionnaires)
            })
            .catch(console.error)
    }, [])

    return (
        <>
            <NavStagiaire />

            <h1>{questionnaires.titre}</h1>

            {questionnaires.Questions.map(question =>
                <div>
                    <h2>{question.titre}</h2>
                </div>
            )}
        </>
    )
}