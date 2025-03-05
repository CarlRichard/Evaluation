import { useState } from "react";
import { Valider } from "../Components/Boutons/Valider/Valider";
import './Inscription.css';

export const Inscription = () => {
    const [inputs, setInputs] = useState({
        nom: "",
        prenom: "",
        email: "",
        mot_de_passe: ""
    });

    const [message, setMessage] = useState(""); // Message suite au submit
    const [messageType, setMessageType] = useState(""); // success ou erreur 

    // Récupérer les valeurs des inputs
    const handleInput = (e) => {
        setInputs((current) => ({ ...current, [e.target.name]: e.target.value }));
    };

    // Création utilisateur
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/api/utilisateur", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(inputs),
            });

           // const data = await res.json();

            if (res.ok) {
                setMessage("Utilisateur créé avec succès !");
                setMessageType("success");
                setInputs({ nom: "", prenom: "", email: "", mot_de_passe: "" }); // Réinitialise 
            } else {
                setMessage("Erreur lors de la création de l'utilisateur.");
                setMessageType("error");
            }
        } catch (error) {
            setMessage("Problème serveur, veuillez réessayer plus tard.");
            setMessageType("error");
        }
    };

    return (
        <>
            <nav className="vide-vert"></nav>
            <form className="template-form" onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <input className="template-input"
                        name="nom"
                        type="text"
                        required
                        placeholder="Nom"
                        value={inputs.nom}
                        onChange={handleInput}
                    />
                    <input className="template-input"
                        name="prenom"
                        type="text"
                        required
                        placeholder="Prénom"
                        value={inputs.prenom}
                        onChange={handleInput}
                    />
                    <input className="template-input"
                        name="email"
                        type="text"
                        required
                        placeholder="Votre email"
                        value={inputs.email}
                        onChange={handleInput}
                    />
                    <input className="template-input"
                        name="mot_de_passe"
                        type="password"
                        required
                        placeholder="Mot de passe"
                        value={inputs.mot_de_passe}
                        onChange={handleInput}
                    />
                </div>
                <Link to={'/connexion'}><Valider /></Link>
            </form>

            {/* Affichage du message sous le formulaire */}
            {message && (
                <p className={messageType === "success" ? "message-success" : "message-error"}>
                    {message}
                </p>
            )}
        </>
    );
};
