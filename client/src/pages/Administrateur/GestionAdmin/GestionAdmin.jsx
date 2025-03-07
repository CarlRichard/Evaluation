import { useState, useEffect } from "react";
import { NavFormateur } from "../../../Components/Navs/NavFormateur";

export const GestionAdmin = () => {
    const [stagiaires, setStagiaires] = useState([]);
    const [newStagiaire, setNewStagiaire] = useState({
        nom: "",
        prenom: "",
        email: "",
        mot_de_passe: "",
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    let tokenUser = localStorage.getItem("token");

    useEffect(() => {
        fetchStagiaires();
    }, []);

    const fetchStagiaires = () => {
        fetch("http://localhost:3000/api/utilisateur", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenUser}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setStagiaires(data.utilisateurs);
            })
            .catch(() => setError("Erreur lors du chargement des stagiaires"));
    };

    const handleAddStagiaire = (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        fetch("http://localhost:3000/api/utilisateur", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenUser}`,
            },
            body: JSON.stringify(newStagiaire),
        })
            .then((res) => res.json())
            .then(() => {
                setSuccess("Stagiaire ajouté avec succès !");
                fetchStagiaires();
                setNewStagiaire({ nom: "", prenom: "", email: "", mot_de_passe: "" });
            })
            .catch(() => setError("Erreur lors de l'ajout du stagiaire"));
    };

    const handleUpdateStagiaire = (id, field, value) => {
        fetch(`http://localhost:3000/api/utilisateur/modifier/${id}`, {
            method: "Patch",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenUser}`,
            },
            body: JSON.stringify({ [field]: value }),
        })
            .then(() => fetchStagiaires())
            .catch(() => setError("Erreur lors de la mise à jour"));
    };

    const handleDeleteStagiaire = (id) => {
        fetch(`http://localhost:3000/api/utilisateur/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${tokenUser}`,
            },
        })
            .then(() => fetchStagiaires())
            .catch(() => setError("Erreur lors de la suppression"));
    };

    const handleInputChange = (e) => {
        setNewStagiaire({ ...newStagiaire, [e.target.name]: e.target.value });
    };

    return (
        <>
            <NavFormateur />
            <h1>Gestion des Stagiaires</h1>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <form onSubmit={handleAddStagiaire}>
                <h2>Ajouter un Stagiaire</h2>
                <input type="text" name="nom" placeholder="Nom" value={newStagiaire.nom} onChange={handleInputChange} required />
                <input type="text" name="prenom" placeholder="Prénom" value={newStagiaire.prenom} onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="Email" value={newStagiaire.email} onChange={handleInputChange} required />
                <input type="password" name="mot_de_passe" placeholder="Mot de passe" value={newStagiaire.mot_de_passe} onChange={handleInputChange} required />
                <button type="submit">Ajouter</button>
            </form>

            <h2>Liste des Stagiaires</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Email</th>
                            <th>Rôle</th>
                            <th>Formation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stagiaires.length > 0 ? (
                            stagiaires.map((stagiaire) => (
                                <tr key={stagiaire.id}>
                                    <td>{stagiaire.nom}</td>
                                    <td>{stagiaire.prenom}</td>
                                    <td>{stagiaire.email}</td>
                                    <td>
                                        <select
                                            value={stagiaire.role}
                                            onChange={(e) => handleUpdateStagiaire(stagiaire.id, "role", e.target.value)}
                                        >
                                            <option value="0">Étudiant</option>
                                            <option value="1">Formateur</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select
                                            value={stagiaire.formation || ""}
                                            onChange={(e) => handleUpdateStagiaire(stagiaire.id, "formation", e.target.value)}
                                        >
                                            <option value="">Non assignée</option>
                                            <option value="Back-End">Back-End</option>
                                            <option value="Front-End">Front-End</option>
                                            <option value="CDA">CDA</option>
                                            <option value="PrépaNum">PrépaNum</option>
                                            <option value="PrépaNum2">PrépaNum2</option>
                                            <option value="POA">POA</option>
                                        </select>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteStagiaire(stagiaire.id)} >Supprimer</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">Aucun stagiaire trouvé</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};
