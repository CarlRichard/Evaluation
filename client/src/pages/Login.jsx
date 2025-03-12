import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './Form.css'
import './Login.css'
import { Valider } from "../Components/Boutons/Valider/Valider";
import { NavStagiaire } from "../Components/Navs/NavStagiaire";
import { NavFormateur } from "../Components/Navs/NavFormateur";

export const Login = ({ setAuthenticated }) => {
    //variables boutons
    const [inputs, setInputs] = useState({
        email: "",
        mot_de_passe: ""
    });

    const navigate = useNavigate();

    //recup input
    const handleInput = (e) => {
        /*
        current = { username: "", password: "" }
        username = "az"
        [e.target.name] => traite la variable dynamiqument en une clé
        */
        setInputs((current) => ({ ...current, [e.target.name]: e.target.value }));
    };


    //login submit ( avec token et cookie )
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3000/auth/connexion", {
                credentials: "include",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(inputs),
            });

            if (res.ok) {
                const data = await res.json();
                if (data.accessToken) {
                    localStorage.setItem('token', data.accessToken);
                    setAuthenticated(true);
                    navigate("/homestagiaire");

                } else {
                    console.log("Token is missing or invalid.");
                }
            } else {
                const error = await res.json();
                console.log(error.message || "Invalid credentials");
            }
        } catch (err) {
            console.error("Error during login:", err);
            console.log("Something went wrong, please try again.");
        }
    };
    return (
        <>
            <nav className="vide-vert"></nav>
            <h1>Connexion</h1>
            <form className="template-form" onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <input className="template-input"
                        name="email"
                        type="text"
                        required
                        placeholder="votre email"
                        onChange={handleInput}
                    />
                    <input className="template-input"
                        name="mot_de_passe"
                        type="password"
                        required
                        placeholder="votre mot de passe"
                        onChange={handleInput}
                    />
                </div>
                <Valider />
            </form>
        </>
    );
};
