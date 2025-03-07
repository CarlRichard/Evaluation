import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { Valider } from "../../../Components/Boutons/Valider/Valider";
import { NavStagiaire } from "../../../Components/Navs/NavStagiaire";

export const ModifProfilS = ({ setAuthenticated }) => {
    const [userData, setUserData] = useState({
        nom: "",
        prenom: "",
        nouveauMdp: "",
        confirmationMdp: "",
    });
    const [error, setError] = useState(null);
    const [decodedToken, setDecodedToken] = useState(null); // Déclare decodedToken
    const [successMessage, setSuccessMessage] = useState(null); // Nouveau state pour le message de succès

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            setError("Token non trouvé.");
            return;
        }

        // Décoder le token et le stocker dans l'état
        const decoded = jwtDecode(token);
        setDecodedToken(decoded); // Stocke decodedToken dans l'état

        const userId = decoded.id;

        // Récupérer les données utilisateur
        fetch(`http://localhost:3000/api/utilisateur/${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.utilisateur && data.utilisateur.nom && data.utilisateur.prenom) {
                    setUserData({
                        nom: data.utilisateur.nom,
                        prenom: data.utilisateur.prenom,
                        nouveauMdp: "",
                        confirmationMdp: "",
                    });
                } else {
                    setError("Erreur lors de la récupération des données.");
                }
            })
            .catch((err) => setError("Erreur réseau : " + err.message));
    }, [token]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!decodedToken) {
            setError("Token non valide.");
            return;
        }

        const { nom, prenom, nouveauMdp, confirmationMdp } = userData;

        if (nouveauMdp !== confirmationMdp) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        fetch(`http://localhost:3000/api/utilisateur/modifier/${decodedToken.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                nom,
                prenom,
                mot_de_passe: nouveauMdp,
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    // Affiche l'erreur de la réponse du serveur si le statut n'est pas OK
                    throw new Error(`Erreur HTTP: ${res.status}`);
                }

                return res.json();  // Essaie de convertir la réponse en JSON
            })
            .then((data) => {
                console.log("Réponse serveur:", data);  // Affiche la réponse du serveur
            
                // Vérifier si la réponse contient une propriété 'success' ou une autre indication de succès
                if (data) {
                    // Si le serveur renvoie un succès
                    setSuccessMessage("Succès de la mise à jour du profil.");
                } else {
                    // Si la réponse ne contient pas de succès
                    setError("Erreur lors de la mise à jour du profil.");
                }
            })
            
            .catch((err) => {
                // Affiche l'erreur réelle, qu'elle soit réseau ou format JSON
                setError("Erreur réseau : " + err.message);
                console.error("Erreur:", err);  // Affiche l'erreur complète dans la console
            });
    };

    return (
        <>
            <NavStagiaire />
            <form className="template-form" onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <input
                        className="template-input"
                        name="nom"
                        type="text"
                        value={userData.nom}
                        required
                        placeholder="Nom"
                        onChange={handleInputChange}
                    />
                    <input
                        className="template-input"
                        name="prenom"
                        type="text"
                        value={userData.prenom}
                        required
                        placeholder="Prénom"
                        onChange={handleInputChange}
                    />
                    <input
                        className="template-input"
                        name="nouveauMdp"
                        type="password"
                        value={userData.nouveauMdp}
                        placeholder="Nouveau mot de passe"
                        onChange={handleInputChange}
                    />
                    <input
                        className="template-input"
                        name="confirmationMdp"
                        type="password"
                        value={userData.confirmationMdp}
                        placeholder="Confirmer votre nouveau mot de passe"
                        onChange={handleInputChange}
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                <Valider />
            </form>
        </>
    );
};
