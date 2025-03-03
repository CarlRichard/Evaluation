import { Valider } from "../../../Components/Boutons/Valider/Valider";
import "./FeedbackProfilF.css"


export const FeedbackProfilF = ({ setAuthenticated }) => {
   
    return (
        <>
       <nav className="vide-vert"></nav>
       <div className="fond-vert">
            <p className="text-feedback">Votre profil à bien été modifié.</p>
       </div>
       <Valider />
        </>
    );
};