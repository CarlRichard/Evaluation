import { Link } from 'react-router-dom'
import { DecoGreen } from '../Boutons/Deconnexion/DecoGreen'

import './NavStagiaire2.css'

export const NavStagiaire2 = () => {
    return (
        <>
            <nav className='nav-stagiaire'>
                <Link to={'/connexion'}><DecoGreen /></Link>
            </nav>
        </>
    )
}