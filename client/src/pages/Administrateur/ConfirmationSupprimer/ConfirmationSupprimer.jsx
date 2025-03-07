import { Valider } from "../../../Components/Boutons/Valider/Valider";
import { Link } from 'react-router-dom';


export const ConfirmationSupprimer = ({ setAuthenticated }) => {
   
    return (
        <>
       <nav className="vide-vert"></nav>
       <div className="fond-vert">
            <p className="text-feedback">Êtes-vous sûr de vouloir<br/> supprimer l'utilisateur ?</p>
       </div>
       <Link to={'/feedback-supprimer'}><Valider /></Link>
       <button className="confirm-button" type="submit" ><Link to={'/'}>Annuler</Link></button>
        </>
    );
};