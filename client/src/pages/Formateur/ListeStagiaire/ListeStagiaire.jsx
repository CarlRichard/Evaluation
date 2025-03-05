import { useEffect } from "react"
import { NavFormateur } from "../../../Components/Navs/NavFormateur"


export const ListeStagiaire = () => {

    let tokenUser = localStorage.getItem("token");

    useEffect(() => {
        fetch('http://localhost:3000/api/utilisateur', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenUser}`,
            },
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(console.error)
    })

    return (
        <>
            <NavFormateur />
            <h1>Stagiaires</h1>


        </>
    )
}

