import { Valider } from "../../../Components/Boutons/Valider/Valider";


export const ConfirmationSupprimer = ({ setAuthenticated }) => {
   
    return (
        <>
       <nav className="vide-vert"></nav>
       <div className="fond-vert">
            <p className="text-feedback">Êtes-vous sûr de vouloir<br/> supprimer l'utilisateur ?</p>
       </div>
       <Valider />
       <button className="confirm-button" type="submit" >Annuler</button>
        </>
    );
};