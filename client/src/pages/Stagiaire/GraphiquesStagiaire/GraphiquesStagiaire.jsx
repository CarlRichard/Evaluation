import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const GraphiquesStagiaire = () => {
    const [evaluations, setEvaluations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3000/api/evaluation", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (!response.ok) {
                setError("Erreur lors du chargement des graphiques");
                return;
            }

            setEvaluations((await response.json()).evaluation);
        })();
    }, []);

    return (
        <>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {evaluations.map(evaluation => (
                    <li key={evaluation.id}>
                        <h2>{evaluation.titre}</h2>
                        <Link to={`/le-graphique/${evaluation.id}`}>link</Link>
                    </li>
                ))}
            </ul>
        </>
    )
};
