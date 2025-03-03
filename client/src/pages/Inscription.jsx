import { Valider } from "../Components/Boutons/Valider/Valider";
import './Inscription.css'


export const Inscription = ({ setAuthenticated }) => {
   
    return (
        <>
        <nav className="vide-vert"></nav>
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
                        name="email"
                        type="text"
                        required
                        placeholder="Votre email"
                        // onChange={handleInput}
                    />
                    <input
                        name="mdp"
                        type="password"
                        required
                        placeholder="Mot de passe"
                        // onChange={handleInput}
                    />
                </div>
                <Valider />
            </form>
        </>
    );
};