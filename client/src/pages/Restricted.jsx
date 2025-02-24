import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const Restricted = ({ authenticated, setAuthenticated }) => {
    const location = useLocation();

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

    const handleOut = () => {
        fetch ('http://localhost:3000/auth/sign-out', {
            credentials: 'include'
        })
        .then(res => {
            if(res.ok) {
                localStorage.clear();
                setAuthenticated(false);
            }
        })
    };

    return !authenticated ? <Navigate to={'/sign-in'} /> : <>
        <button onClick={handleOut}>Logout</button>
        <h1>Coucou</h1>;
    </>
};