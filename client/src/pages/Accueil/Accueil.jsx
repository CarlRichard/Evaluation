import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import "./Accueil.css"

export const Accueil = () => {

    const {accueil, setAcceuil} = useState();

    useEffect(() => {
        handleConnexion();
        handleSinscrire()
    }, [])


const handleConnexion = () => {
    fetch()
    .then(res => res.json())
    .then(data => setAcceuil(data))
    .catch(console.error)
}

const handleSinscrire = () => {
    fetch()
    .then(res => res.json())
    .then(data => setAcceuil(data))
    .catch(console.error)
}
    return(
        <>
        <nav className='navVideVerte'></nav>
        <section className='section'>
            <h1>Bienvenue sur L'Evaluation</h1>
            <div className='fond'>
                <Link to={'/connexion'}><button className='btnConnexion' onClick={handleConnexion}>Connexion</button></Link>
                <Link to={'/inscription'}><button className='btnSinscrire' onClick={handleSinscrire}>S'inscrire</button></Link>
            </div>
        </section>
        </>
    )
}
