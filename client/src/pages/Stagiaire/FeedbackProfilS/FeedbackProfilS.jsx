import { Valider } from "../../../Components/Boutons/Valider/Valider";
import "./FeedbackProfilS.css"


export const FeedbackProfilS = ({ setAuthenticated }) => {
   
    return (
        <>
       <nav className="vide-orange"></nav>
       <div className="fond-vert">
            <p className="text-feedback">Votre profil à bien été modifié.</p>
       </div>
       <Valider />
        </>
    );
};