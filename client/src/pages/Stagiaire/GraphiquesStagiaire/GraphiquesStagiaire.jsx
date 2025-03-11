import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const GraphiquesStagiaire = () => {
    const [evaluations, setEvaluations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            console.log("Début de la requête API...");

            const response = await fetch("http://localhost:3000/api/evaluation", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (!response.ok) {
                console.error("Erreur dans la réponse de l'API:", response.status, response.statusText);
                setError("Erreur lors du chargement des graphiques");
                return;
            }

            const data = await response.json();
            console.log("Données reçues de l'API:", data);

            setEvaluations(data.evaluations || []); // Assure-toi que 'evaluation' existe dans la réponse
        })();
    }, []);

    return (
        <>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {evaluations.length === 0 ? (
                    <p>Aucune évaluation disponible</p>
                ) : (
                    evaluations.map(evaluation => (
                        <li key={evaluation.id}>
                            <h2>{evaluation.titre}</h2>
                            <Link to={`/le-graphique/${evaluation.id}`}>link</Link>
                        </li>
                    ))
                )}
            </ul>
        </>
    );
};
