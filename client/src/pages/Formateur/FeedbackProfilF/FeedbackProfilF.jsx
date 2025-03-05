import { Valider } from "../../../Components/Boutons/Valider/Valider";
import "./FeedbackProfilF.css"
import { Link } from 'react-router-dom';


export const FeedbackProfilF = ({ setAuthenticated }) => {
   
    return (
        <>
       <nav className="vide-vert"></nav>
       <div className="fond-vert">
            <p className="text-feedback">Votre profil à bien été modifié.</p>
       </div>
       <Link to={'/accueil-formateur'}><Valider /></Link>
        </>
    );
};