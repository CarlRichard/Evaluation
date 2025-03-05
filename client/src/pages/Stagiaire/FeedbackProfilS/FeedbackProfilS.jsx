import { Valider } from "../../../Components/Boutons/Valider/Valider";
import "./FeedbackProfilS.css"
import { Link } from 'react-router-dom';


export const FeedbackProfilS = ({ setAuthenticated }) => {
   
    return (
        <>
       <nav className="vide-orange"></nav>
       <div className="fond-vert">
            <p className="text-feedback">Votre profil à bien été modifié.</p>
       </div>
       <Link to={'/homestagiaire'}><Valider /></Link>
        </>
    );
};