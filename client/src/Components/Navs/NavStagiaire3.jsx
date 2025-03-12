import { Link } from 'react-router-dom'

import './NavStagiaire3.css'
import { AccueilGreen } from '../Boutons/Accueil/AccueilGreen'

export const NavStagiaire3 = () => {
    return (
        <>
            <nav className='nav-stagiaire'>
                <Link to={'/homestagiaire'}><AccueilGreen /></Link>
            </nav>
        </>
    )
}