import { Link } from 'react-router-dom'
import { AccueilGreen } from '../Boutons/Accueil/AccueilGreen'
import { DecoGreen } from '../Boutons/Deconnexion/DecoGreen'

import './NavStagiaire.css'

export const NavStagiaire = () => {
    return (
        <>
            <nav className='nav-stagiaire'>
                <Link to={'/homestagiaire'}><AccueilGreen /></Link>
                <Link to={'/connexion'}><DecoGreen /></Link>
            </nav>
        </>
    )
}