import { Valider } from "../Components/Boutons/Valider/Valider";
import './Inscription.css'


export const Inscription = ({ setAuthenticated }) => {

    return (
        <>
            <nav className="vide-vert"></nav>
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
                        name="email"
                        type="text"
                        required
                        placeholder="Votre email"
                    // onChange={handleInput}
                    />
                    <input className="template-input"
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