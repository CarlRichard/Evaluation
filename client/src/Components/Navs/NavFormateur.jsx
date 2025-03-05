import { Link } from "react-router-dom"
import { AccueilOrange } from "../Boutons/Accueil/AccueilOrange"
import { DecoOrange } from "../Boutons/Deconnexion/DecoOrange"

import './NavFormateur.css'

export const NavFormateur = () => {
    return (
        <nav className="nav-formateur">
            <Link to={'/accueil-formateur'}><AccueilOrange /></Link>
            <Link to={'/connexion'}></Link><DecoOrange />
        </nav>
    )
}