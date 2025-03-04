import { Valider } from "../../../Components/Boutons/Valider/Valider";


export const FeedbackSupprimer = ({ setAuthenticated }) => {
   
    return (
        <>
       <nav className="vide-vert"></nav>
       <div className="fond-vert">
            <p className="text-feedback">L'utilisateur à bien été supprimé.</p>
       </div>
       <Valider />
        </>
    );
};