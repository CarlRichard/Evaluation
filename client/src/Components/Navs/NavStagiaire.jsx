import { AccueilGreen } from '../Boutons/Accueil/AccueilGreen'
import { DecoGreen } from '../Boutons/Deconnexion/DecoGreen'

import './NavStagiaire.css'

export const NavStagiaire = () => {
    return (
        <>
            <nav className='nav-stagiaire'>
                <AccueilGreen />
                <DecoGreen />
            </nav>
        </>
    )
}