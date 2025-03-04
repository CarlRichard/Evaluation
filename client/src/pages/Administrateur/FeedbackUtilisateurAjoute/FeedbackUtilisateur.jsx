import { Valider } from "../../../Components/Boutons/Valider/Valider";
import "./FeedbackUtilisateur.css"


export const FeedbackUtilisateur = ({ setAuthenticated }) => {
   
    return (
        <>
       <nav className="vide-vert"></nav>
       <div className="fond-vert">
            <p className="text-feedback">L'utilisateur à bien été ajouté.</p>
       </div>
       <Valider />
        </>
    );
};