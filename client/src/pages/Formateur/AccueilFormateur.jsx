import { DecoOrange } from "../../Components/Boutons/Deconnexion/DecoOrange"
import { Profil } from "../../Components/Boutons/Profil/Profil"

import './AccueilFormateur.css'

export const AccueilFormateur = () => {
    return (
        <>
            <nav className="nav-acc-formateur">
                <DecoOrange />
            </nav>

            <Profil />
        </>
    )
}