import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


// test de page proteger par le token ( correspond a la page d'accueil )
export const Restricted = ({ authenticated, setAuthenticated }) => {
    const location = useLocation();

    // token qui se refresh sur le cookie toute les heures 
    useEffect(() => {
        fetch('http://localhost:3000/auth/authenticated', {
            credentials: 'include',
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.accessToken) {
                localStorage.setItem('token', data.accessToken);
            }
            setAuthenticated(data.connected);
        });
    }, [location]);


    // deconnexion 
    const handleOut = () => {
        fetch ('http://localhost:3000/auth/deconnexion', {
            credentials: 'include'
        })
        .then(res => {
            if(res.ok) {
                localStorage.clear();
                setAuthenticated(false);
            }
        })
    };

    //redirection si token manquant ou périmé
    return !authenticated ? <Navigate to={'/connexion'} /> : <>
        <button onClick={handleOut}>Logout</button>
        <h1>hello</h1>;
    </>
};