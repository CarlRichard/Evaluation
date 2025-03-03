
import { Valider } from "../../../Components/Boutons/Valider/Valider";
import { NavFormateur } from "../../../Components/Navs/NavFormateur";


export const ModifProfilF = ({ setAuthenticated }) => {
   
    return (
        <>
            <NavFormateur />
            <form >
                <div className="inputContainer">
                    <input
                        name="nom"
                        type="text"
                        required
                        placeholder="Nom"
                        // onChange={handleInput}
                    />
                    <input
                        name="prenom"
                        type="text"
                        required
                        placeholder="Prénom"
                        // onChange={handleInput}
                    />
                    <input
                        name="nouveau-mdp"
                        type="password"
                        required
                        placeholder="Nouveau mot de passe"
                        // onChange={handleInput}
                    />
                    <input
                        name="confirmation-mdp"
                        type="password"
                        required
                        placeholder="Confirmer votre nouveau mot de passe"
                        // onChange={handleInput}
                    />
                </div>
                <Valider />
            </form>
        </>
    );
};