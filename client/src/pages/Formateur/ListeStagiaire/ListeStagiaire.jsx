import { useEffect, useState } from "react";
import { NavFormateur } from "../../../Components/Navs/NavFormateur";

export const ListeStagiaire = () => {
    const [stagiaires, setStagiaires] = useState([]); 
    const [error, setError] = useState(null); // gestion erreur

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) return; 

        fetch('http://localhost:3000/api/utilisateur', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.json()) 
            .then(data => {
                console.log(data)
                if (Array.isArray(data.utilisateurs)) {
                    setStagiaires(data.utilisateurs); 
                } else {
                    setError("erreur de la requete.");
                }
            })
            .catch(error => setError("Erreur réseau : " + error.message)); 
    }, [token]);

    return (
        <>
            <NavFormateur />
            <h1>Stagiaires</h1>

            {error && <p>Erreur: {error}</p>} {/* Affiche l'erreur si elle existe */}

            {Array.isArray(stagiaires) && stagiaires.length === 0 ? (
                <p>Aucun stagiaire trouvé.</p>
            ) : (
                <ul>
                    {Array.isArray(stagiaires) && stagiaires.map((stagiaire) => (
                        <li key={stagiaire.id}>{stagiaire.nom} {stagiaire.prenom}</li> 
                    ))}
                </ul>
            )}
        </>
    );
};
