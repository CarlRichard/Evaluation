# Documentation de l'API

## Routes d'authentification

| Route                    | Méthode | Corps de la requête                                       | Réponse                                                  |
|--------------------------|---------|-----------------------------------------------------------|----------------------------------------------------------|
| `/auth/register`         | POST    | ```json\n{ "email": "exemple@example.com", "mot_de_passe": "motdepasse123" }\n``` | ```json\n{ "id": 1, "email": "exemple@example.com" }\n``` |
| `/auth/login`            | POST    | ```json\n{ "email": "exemple@example.com", "mot_de_passe": "motdepasse123" }\n``` | ```json\n{ "accessToken": "jwt_access_token" }\n``` |
| `/auth/logout`           | POST    | Aucun corps de requête nécessaire.                         | ```json\n{ "message": "You have been logged out" }\n``` |
| `/auth/authenticated`    | GET     | Aucun corps de requête nécessaire.                         | ```json\n{ "connected": true, "accessToken": "jwt_access_token" }\n``` |

## Routes des utilisateurs

| Route                    | Méthode | Corps de la requête                                       | Réponse                                                  |
|--------------------------|---------|-----------------------------------------------------------|----------------------------------------------------------|
| `/api/utilisateur`       | POST    | ```json\n{ "nom": "Nom", "prenom": "Prenom", "email": "exemple@example.com", "role": "ROLE_ADMIN", "formation": "Informatique", "mot_de_passe": "motdepasse123" }\n``` | ```json\n{ "message": "Utilisateur créé avec succès", "utilisateur": { "id": 1, "nom": "Nom", "prenom": "Prenom", "email": "exemple@example.com" } }\n``` |
| `/api/utilisateur`       | GET     | Aucun corps de requête nécessaire.                         | ```json\n{ "utilisateurs": [ { "id": 1, "nom": "Nom", "prenom": "Prenom", "email": "exemple@example.com" } ] }\n``` |
| `/api/utilisateur/:id`   | GET     | Aucun corps de requête nécessaire.                         | ```json\n{ "id": 1, "nom": "Nom", "prenom": "Prenom", "email": "exemple@example.com" }\n``` |
| `/api/utilisateur/:id`   | PUT     | ```json\n{ "nom": "NouveauNom", "prenom": "NouveauPrenom", "email": "nouveau@example.com" }\n``` | ```json\n{ "message": "Utilisateur mis à jour avec succès" }\n``` |
| `/api/utilisateur/:id`   | DELETE  | Aucun corps de requête nécessaire.                         | ```json\n{ "message": "Utilisateur supprimé avec succès" }\n``` |

## Routes des évaluations

| Route                    | Méthode | Corps de la requête                                       | Réponse                                                  |
|--------------------------|---------|-----------------------------------------------------------|----------------------------------------------------------|
| `/api/evaluation`         | POST    | ```json\n{ "id_evalue": 2, "commentaire": "Évaluation de l'utilisateur.", "id_reponse": 3 }\n``` | ```json\n{ "message": "Évaluation créée avec succès", "evaluation": { "id": 1, "id_evaluateur": 1, "id_evalue": 2, "commentaire": "Évaluation de l'utilisateur.", "id_reponse": 3 } }\n``` |
| `/api/evaluation`         | GET     | Aucun corps de requête nécessaire.                         | ```json\n{ "evaluations": [ { "id": 1, "evaluateur": { "id": 1, "nom": "Evaluateur", "prenom": "Prenom" }, "evalue": { "id": 2, "nom": "Évalué", "prenom": "Prenom" }, "reponse": { "id": 3, "rep": "Réponse" } } ] }\n``` |
| `/api/evaluation/:id`     | GET     | Aucun corps de requête nécessaire.                         | ```json\n{ "evaluation": { "id": 1, "evaluateur": { "id": 1, "nom": "Evaluateur", "prenom": "Prenom" }, "evalue": { "id": 2, "nom": "Évalué", "prenom": "Prenom" }, "reponse": { "id": 3, "rep": "Réponse" } } }\n``` |
| `/api/evaluation/:id`     | PUT     | ```json\n{ "commentaire": "Nouveau commentaire" }\n```     | ```json\n{ "message": "Évaluation mise à jour avec succès" }\n``` |
| `/api/evaluation/:id`     | DELETE  | Aucun corps de requête nécessaire.                         | ```json\n{ "message": "Évaluation supprimée avec succès" }\n``` |

## Routes des questions

| Route                    | Méthode | Corps de la requête                                       | Réponse                                                  |
|--------------------------|---------|-----------------------------------------------------------|----------------------------------------------------------|
| `/api/question`          | POST    | ```json\n{ "titre": "Titre de la question", "description": "Description de la question", "id_questionnaire": 1 }\n``` | ```json\n{ "message": "Question créée avec succès", "question": { "id": 1, "titre": "Titre de la question", "description": "Description de la question" } }\n``` |
| `/api/question`          | GET     | Aucun corps de requête nécessaire.                         | ```json\n{ "questions": [ { "id": 1, "titre": "Titre de la question", "description": "Description de la question" } ] }\n``` |
| `/api/question/:id`      | GET     | Aucun corps de requête nécessaire.                         | ```json\n{ "question": { "id": 1, "titre": "Titre de la question", "description": "Description de la question" } }\n``` |
| `/api/question/:id`      | PUT     | ```json\n{ "titre": "Nouveau titre", "description": "Nouvelle description", "id_questionnaire": 2 }\n``` | ```json\n{ "message": "Question mise à jour avec succès" }\n``` |
| `/api/question/:id`      | DELETE  | Aucun corps de requête nécessaire.                         | ```json\n{ "message": "Question supprimée avec succès" }\n``` |

## Routes des réponses

| Route                    | Méthode | Corps de la requête                                       | Réponse                                                  |
|--------------------------|---------|-----------------------------------------------------------|----------------------------------------------------------|
| `/api/reponse`           | POST    | ```json\n{ "rep": "Réponse", "id_question": 1 }\n```       | ```json\n{ "message": "Réponse créée avec succès", "reponse": { "id": 1, "rep": "Réponse" } }\n``` |
| `/api/reponse`           | GET     | Aucun corps de requête nécessaire.                         | ```json\n{ "reponses": [ { "id": 1, "rep": "Réponse" } ] }\n``` |
| `/api/reponse/:id`       | GET     | Aucun corps de requête nécessaire.                         | ```json\n{ "reponse": { "id": 1, "rep": "Réponse" } }\n``` |
| `/api/reponse/:id`       | PUT     | ```json\n{ "rep": "Nouvelle réponse" }\n```                 | ```json\n{ "message": "Réponse mise à jour avec succès" }\n``` |
| `/api/reponse/:id`       | DELETE  | Aucun corps de requête nécessaire.                         | ```json\n{ "message": "Réponse supprimée avec succès" }\n``` |
