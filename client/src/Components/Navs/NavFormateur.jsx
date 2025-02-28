import { AccueilOrange } from "../Boutons/Accueil/AccueilOrange"
import { DecoOrange } from "../Boutons/Deconnexion/DecoOrange"

import './NavFormateur.css'

export const NavFormateur = () => {
    return (
        <nav className="nav-formateur">
            <AccueilOrange />
            <DecoOrange />
        </nav>
    )
}