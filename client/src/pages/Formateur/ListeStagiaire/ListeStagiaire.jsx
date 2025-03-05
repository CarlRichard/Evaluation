import { useEffect } from "react"
import { NavFormateur } from "../../../Components/Navs/NavFormateur"

export const ListeStagiaire = () => {

    useEffect(() => {
        fetch('http://localhost:5173/api/utilisateur')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(console.error)
    }, [])

    return (
        <>
            <NavFormateur />

            <h1>Stagiaires</h1>


        </>
    )
}