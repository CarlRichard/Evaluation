
import { Valider } from "../../../Components/Boutons/Valider/Valider";
import { NavFormateur } from "../../../Components/Navs/NavFormateur";
import { Link } from 'react-router-dom';


export const ModifProfilF = ({ setAuthenticated }) => {

    return (
        <>
            <NavFormateur />
            <form className="template-form">
                <div className="inputContainer">
                    <input className="template-input"
                        name="nom"
                        type="text"
                        required
                        placeholder="Nom"
                    // onChange={handleInput}
                    />
                    <input className="template-input"
                        name="prenom"
                        type="text"
                        required
                        placeholder="Prénom"
                    // onChange={handleInput}
                    />
                    <input className="template-input"
                        name="nouveau-mdp"
                        type="password"
                        required
                        placeholder="Nouveau mot de passe"
                    // onChange={handleInput}
                    />
                    <input className="template-input"
                        name="confirmation-mdp"
                        type="password"
                        required
                        placeholder="Confirmer votre nouveau mot de passe"
                    // onChange={handleInput}
                    />
                </div>
                <Link to={'/feedback-profil-formateur'}><Valider /></Link>
            </form>
        </>
    );
};