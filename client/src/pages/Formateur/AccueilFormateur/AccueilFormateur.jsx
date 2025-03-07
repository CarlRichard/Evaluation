import { Link, Links } from "react-router-dom"
import { DecoOrange } from "../../../Components/Boutons/Deconnexion/DecoOrange"
import { Profil } from "../../../Components/Boutons/Profil/Profil"

import './AccueilFormateur.css'

export const AccueilFormateur = () => {
    return (
        <>
            <nav className="nav-acc-formateur">
                <DecoOrange />
            </nav>

            <div className="bouton-acc-formateur">
                <button className="bouton-formateur">Création d'un nouveau questionnaire</button>
                <button className="bouton-formateur"><Link to={'/questionnaire-formateur'}>Gestion des questionnaires existants</Link></button>
                <button className="bouton-formateur"><Link to={'/graph-formateur'}>Visualiser les graphiques</Link></button>
            </div>

            <Profil />
        </>
    )
}