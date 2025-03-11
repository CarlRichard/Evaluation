import './GraphFormateur.css';
import { NavFormateur } from "../../../Components/Navs/NavFormateur";
import { useState, useEffect } from "react";

export const GraphFormateur = () => {
    const [reponses, setReponses] = useState([]);
    const [utilisateurs, setUtilisateurs] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [evaluations, setEvaluations] = useState({});
    const [evaluationsExistantes, setEvaluationsExistantes] = useState([]);

    // Fonction pour récupérer les évaluations existantes
    const fetchEvaluations = () => {
        fetch("http://localhost:3000/api/evaluation", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data.evaluations && Array.isArray(data.evaluations)) {
                    setEvaluationsExistantes(data.evaluations);
                } else {
                    console.error("Les données des évaluations ne sont pas un tableau.");
                }
            })
            .catch(error => console.error("Erreur récupération évaluations:", error));
    };

    // Charger les évaluations au démarrage
    useEffect(() => {
        fetchEvaluations();
    }, []);

    // Charger les réponses
    useEffect(() => {
        fetch("http://localhost:3000/api/reponse", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data && Array.isArray(data.reponses)) {
                    setReponses(data.reponses);
                } else {
                    console.error("Les données des réponses ne sont pas un tableau.");
                }
            })
            .catch(error => console.error("Erreur récupération réponses:", error));
    }, []);

    // Charger les utilisateurs
    useEffect(() => {
        fetch("http://localhost:3000/api/utilisateur", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data.utilisateurs && Array.isArray(data.utilisateurs)) {
                    setUtilisateurs(data.utilisateurs);
                } else {
                    console.error("Les données des utilisateurs ne sont pas un tableau.");
                }
            })
            .catch(error => console.error("Erreur récupération utilisateurs:", error));
    }, []);

    // Charger les questions
    useEffect(() => {
        fetch("http://localhost:3000/api/question", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data.questions && Array.isArray(data.questions)) {
                    setQuestions(data.questions);
                } else {
                    console.error("Les données des questions ne sont pas un tableau.");
                }
            })
            .catch(error => console.error("Erreur récupération questions:", error));
    }, []);

    // Vérifier si une réponse a déjà été évaluée
    const estDejaEvaluee = (id_reponse) => {
        return evaluationsExistantes.some(evaluation => evaluation.id_reponse === id_reponse);
    };

    const handleChange = (id, field, value) => {
        setEvaluations(prev => ({
            ...prev,
            [id]: { ...prev[id], [field]: value }
        }));
    };

    const handleSubmit = async (e, id) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if (!token) {
            alert("Token manquant !");
            return;
        }

        const evaluationData = {
            commentaire: evaluations[id]?.commentaire || "",
            id_reponse: id,
            note_formateur: parseInt(evaluations[id]?.note) || 0,
        };

        try {
            const response = await fetch("http://localhost:3000/api/evaluation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(evaluationData),
            });

            if (!response.ok) {
                throw new Error("Échec de l'envoi de l'évaluation");
            }

            alert(`Évaluation envoyée pour la réponse ${id} !`);

            // Recharger les évaluations après envoi
            fetchEvaluations();
        } catch (error) {
            console.error("Erreur :", error);
            alert("Erreur lors de l'envoi de l'évaluation.");
        }
    };

    return (
        <>
            <NavFormateur />
            <h1>Visualiser les réponses et évaluer</h1>

            <section className='reponses'>
                <h2>Réponses disponibles</h2>
                {reponses.length > 0 ? (
                    <ul>
                        {reponses.map((reponse) => (
                            <li key={reponse.id}>
                                <p>
                                    <strong>Utilisateur:</strong> {utilisateurs.find(user => user.id === reponse.id_utilisateur)?.nom || "Utilisateur inconnu"}<br />
                                    <strong>Réponse:</strong> {reponse.rep}<br />
                                    <strong>Question:</strong> {questions.find(q => q.id === reponse.id_question)?.titre || "Question inconnue"}
                                </p>

                                {estDejaEvaluee(reponse.id) ? (
                                    <p style={{ color: "green", fontWeight: "bold" }}>✅ Déjà évaluée</p>
                                ) : (
                                    <>
                                        <h3>Évaluer la réponse {reponse.id}</h3>
                                        <form onSubmit={(e) => handleSubmit(e, reponse.id)}>
                                            <div>
                                                <label>Commentaire :</label>
                                                <textarea
                                                    value={evaluations[reponse.id]?.commentaire || ""}
                                                    onChange={(e) => handleChange(reponse.id, "commentaire", e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <label>Note :</label>
                                                <input
                                                    type="number"
                                                    value={evaluations[reponse.id]?.note || ""}
                                                    onChange={(e) => handleChange(reponse.id, "note", e.target.value)}
                                                />
                                            </div>
                                            <button type="submit">Envoyer l'évaluation</button>
                                        </form>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucune réponse disponible.</p>
                )}
            </section>
        </>
    );
};
