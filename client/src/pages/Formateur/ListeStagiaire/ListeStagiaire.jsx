import './ListeStagiaire.css'
import { useEffect, useState } from "react"
import { NavFormateur } from "../../../Components/Navs/NavFormateur"


export const ListeStagiaire = () => {

    let tokenUser = localStorage.getItem("token");

    const [stagiaires, setStagiaires] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/utilisateur', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenUser}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.utilisateurs)
                setStagiaires(data.utilisateurs)
            })
            .catch(console.error)
    }, [tokenUser])

    return (
        <>
            <NavFormateur />
            <h1>Stagiaires</h1>
            <section className="stagiaire-list">
                {stagiaires.map(stagiaire => <div className="stagiaire-card">
                    <p>{stagiaire.prenom}</p>
                    <p>{stagiaire.nom}</p>
                </div>)}
            </section>
        </>
    )
}