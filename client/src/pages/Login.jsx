import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({setAuthenticated}) => {
    const [inputs, setInputs] = useState({ 
        username: "",
        password: ""
    });

    const navigate = useNavigate(); 

    const handleInput = (e) => {
        /*
        current = { username: "", password: "" }
        username = "az"
        [e.target.name] => traite la variable dynamiqument en une clé
        */
        setInputs((current) => ({ ...current, [e.target.name]: e.target.value }));
    };

const handleSubmit = async e => {
    e.preventDefault();
    try {
        const res = await fetch("http://localhost:3000/auth/sign-in", {
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
                alert("Token is missing or invalid.");
            }
        } else {
            const error = await res.json(); 
            alert(error.message || "Invalid credentials");
        }
    } catch (err) {
        console.error("Error during login:", err);
        alert("Something went wrong, please try again.");
    }
};
    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="username" 
                type="text" 
                required
                placeholder="Username" 
                onChange={handleInput} 
            />
            <input 
                name="password" 
                type="password" 
                required
                placeholder="Password" 
                onChange={handleInput} 
            />
            <button type="submit" >Connection</button>
        </form>
    );
};
