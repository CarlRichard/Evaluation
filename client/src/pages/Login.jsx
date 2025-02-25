import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({setAuthenticated}) => {
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
               navigate("/");
           
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
        <form onSubmit={handleSubmit}>
            <input 
                name="email" 
                type="text" 
                required
                placeholder="votre email" 
                onChange={handleInput} 
            />
            <input 
                name="mot_de_passe" 
                type="password" 
                required
                placeholder="votre mot de passe" 
                onChange={handleInput} 
            />
            <button type="submit" >Connection</button>
        </form>
    );
};
