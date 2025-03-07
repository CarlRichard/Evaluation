import { Link } from 'react-router-dom';

import "./Accueil.css"

export const Accueil = () => {

    return(
        <>
        <nav className='navVideVerte'></nav>
        <section className='section'>
            <h1>Bienvenue sur L'Evaluation</h1>
            <div className='fond'>
                <button className='btnConnexion' ><Link to={'/connexion'}>Connexion</Link></button>
                <button className='btnSinscrire' ><Link to={'/inscription'}>S'inscrire</Link></button>
            </div>
        </section>
        </>
    )
}
