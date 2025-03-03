import { Valider } from "../../Components/Boutons/Valider/Valider";
import "./FeedbackInscription.css"


export const FeedbackInscription = ({ setAuthenticated }) => {
   
    return (
        <>
       <nav className="vide-vert"></nav>
       <div className="fond-vert">
            <p className="text-feedback">Votre compte à bien été créé.</p>
       </div>
       <Valider />
        </>
    );
};