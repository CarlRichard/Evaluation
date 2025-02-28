import { useEffect, useState } from 'react'

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
                <button className='btnConnexion' onClick={handleConnexion}>Connexion</button>
                <button className='btnSinscrire' onClick={handleSinscrire}>S'inscrire</button>
            </div>
        </section>
        </>
    )
}
