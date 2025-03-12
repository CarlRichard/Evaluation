# Documentation de l'API

## Routes d'authentification

### `/auth/register` (POST)
Enregistre un nouvel utilisateur dans le système.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/auth/register`         | POST    | ```json\n{ "email": "exemple@example.com", "mot_de_passe": "motdepasse123" }\n``` |

### `/auth/login` (POST)
Permet à un utilisateur de se connecter en fournissant ses identifiants. Un token d'accès JWT est renvoyé pour les requêtes ultérieures.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/auth/login`            | POST    | ```json\n{ "email": "exemple@example.com", "mot_de_passe": "motdepasse123" }\n``` |

### `/auth/logout` (POST)
Déconnecte l'utilisateur et supprime le `refreshToken` associé.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/auth/logout`           | POST    | Aucun corps de requête nécessaire.                         |

### `/auth/authenticated` (GET)
Vérifie si l'utilisateur est authentifié et renvoie un nouvel `accessToken` si un `refreshToken` valide est fourni.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/auth/authenticated`    | GET     | Aucun corps de requête nécessaire.                         |

## Routes des utilisateurs

### `/api/utilisateur` (POST)
Crée un nouvel utilisateur avec les informations fournies. Utilisé lors de l'inscription d'un utilisateur.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/utilisateur`       | POST    | ```json\n{ "nom": "Nom", "prenom": "Prenom", "email": "exemple@example.com", "role": "ROLE_ADMIN", "formation": "Informatique", "mot_de_passe": "motdepasse123" }\n``` |

### `/api/utilisateur` (GET)
Récupère tous les utilisateurs, sans leurs mots de passe, à des fins d'affichage ou de gestion.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/utilisateur`       | GET     | Aucun corps de requête nécessaire.                         |

### `/api/utilisateur/:id` (GET)
Récupère un utilisateur par son ID, sans son mot de passe. Permet d'afficher les détails d'un utilisateur spécifique.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/utilisateur/:id`   | GET     | Aucun corps de requête nécessaire.                         |

### `/api/utilisateur/:id` (PUT)
Met à jour les informations d'un utilisateur spécifique. Cette route peut être utilisée pour modifier les détails d'un utilisateur, comme son nom, son prénom ou son email.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/utilisateur/:id`   | PUT     | ```json\n{ "nom": "NouveauNom", "prenom": "NouveauPrenom", "email": "nouveau@example.com" }\n``` |

### `/api/utilisateur/:id` (DELETE)
Supprime un utilisateur spécifique du système. Cela peut être utilisé pour désactiver ou supprimer définitivement un utilisateur.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/utilisateur/:id`   | DELETE  | Aucun corps de requête nécessaire.                         |

## Routes des évaluations

### `/api/evaluation` (POST)
Crée une évaluation pour un utilisateur spécifié. L'évaluation peut inclure un commentaire et une référence à une réponse spécifique.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/evaluation`         | POST    | ```json\n{ "id_evalue": 2, "commentaire": "Évaluation de l'utilisateur.", "id_reponse": 3 }\n``` |

### `/api/evaluation` (GET)
Récupère toutes les évaluations existantes, avec les informations sur les évaluateurs, les évalués et les réponses associées.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/evaluation`         | GET     | Aucun corps de requête nécessaire.                         |

### `/api/evaluation/:id` (GET)
Récupère une évaluation spécifique par ID, avec les détails de l'évaluateur, de l'évalué et de la réponse.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/evaluation/:id`     | GET     | Aucun corps de requête nécessaire.                         |

### `/api/evaluation/:id` (PUT)
Met à jour une évaluation spécifique. Ce processus peut être utilisé pour modifier un commentaire ou les informations associées à l'évaluation.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/evaluation/:id`     | PUT     | ```json\n{ "commentaire": "Nouveau commentaire" }\n```     |

### `/api/evaluation/:id` (DELETE)
Supprime une évaluation spécifique.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/evaluation/:id`     | DELETE  | Aucun corps de requête nécessaire.                         |


### `/api/evaluation/mes-evaluations` (GET)
Recupere les evaluation lié a l'id de la personne connecté

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/evaluation/:id`     | GET  | Aucun corps de requête nécessaire.                         |

## Routes des questions

### `/api/question` (POST)
Crée une nouvelle question pour un questionnaire spécifique.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/question`          | POST    | ```json\n{ "titre": "Titre de la question", "description": "Description de la question", "id_questionnaire": 1 }\n``` |

### `/api/question` (GET)
Récupère toutes les questions existantes.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/question`          | GET     | Aucun corps de requête nécessaire.                         |

### `/api/question/:id` (GET)
Récupère une question spécifique par ID.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/question/:id`      | GET     | Aucun corps de requête nécessaire.                         |

### `/api/question/:id` (PUT)
Met à jour les informations d'une question spécifique.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/question/:id`      | PUT     | ```json\n{ "titre": "Nouveau titre", "description": "Nouvelle description", "id_questionnaire": 2 }\n``` |

### `/api/question/:id` (DELETE)
Supprime une question spécifique.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/question/:id`      | DELETE  | Aucun corps de requête nécessaire.                         |

## Routes des réponses

### `/api/reponse` (POST)
Crée une nouvelle réponse pour une question donnée.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/reponse`           | POST    | ```json\n{ "rep": "Réponse", "id_question": 1 }\n```       |

### `/api/reponse` (GET)
Récupère toutes les réponses existantes.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/reponse`           | GET     | Aucun corps de requête nécessaire.                         |

### `/api/reponse/:id` (GET)
Récupère une réponse spécifique par ID.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/reponse/:id`       | GET     | Aucun corps de requête nécessaire.                         |

### `/api/reponse/:id` (PUT)
Met à jour une réponse spécifique.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/reponse/:id`       | PUT     | ```json\n{ "rep": "Nouvelle réponse" }\n```                |

### `/api/reponse/:id` (DELETE)
Supprime une réponse spécifique.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/reponse/:id`       | DELETE  | Aucun corps de requête nécessaire.                         |



## Routes des questionnaires

### `/api/questionnaire` (POST)
Crée un nouveau questionnaire.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/questionnaire`     | POST    | ```json
{ "titre": "Quizz pour pierre", "description": "Description du questionnaire." }


### `/api/questionnaire` (GET)
Récupère tous les questionnaires existants.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/questionnaire`     | GET     | Aucun corps de requête nécessaire.                         |

### `/api/questionnaire/:id` (GET)
Récupère un questionnaire spécifique par ID.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/questionnaire/:id` | GET     | Aucun corps de requête nécessaire.                         |

### `/api/questionnaire/:id` (PUT)
Met à jour un questionnaire spécifique.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/questionnaire/:id` | PUT     | ```json
{ "titre": "Questionnaire Mis à Jour", "description": "Nouvelle description.", "formation": "CDA" }


### `/api/questionnaire/:id` (DELETE)
Supprime un questionnaire spécifique.

| Route                    | Méthode | Corps de la requête                                       |
|--------------------------|---------|-----------------------------------------------------------|
| `/api/questionnaire/:id` | DELETE  | Aucun corps de requête nécessaire.                         |

### `/api/questionnaire/add-question/:questionnaireId/:questionId` (POST)
Ajoute une question à un questionnaire via une relation de jointure.

| Route                                                    | Méthode | Corps de la requête |
|----------------------------------------------------------|---------|---------------------|
| `/api/questionnaire/add-question/:questionnaireId/:questionId` | POST    | Aucun corps nécessaire. |

### `/api/questionnaire/recup-questions/:id` (GET)
Récupère toutes les questions d'un questionnaire spécifique.

| Route                                         | Méthode | Corps de la requête |
|-----------------------------------------------|---------|---------------------|
| `/api/questionnaire/recup-questions/:id`     | GET     | Aucun corps nécessaire. |

### `/api/questionnaire/filtre/formation` (GET)
Filtre les questionnaires par formation.

| Route                                     | Méthode | Corps de la requête |
|-------------------------------------------|---------|---------------------|
| `/api/questionnaire/filtre/formation`     | GET     | Aucun corps nécessaire. |


### `/api/questionnaire/add-question/:id_questionnaire/:id_question` (POST)

Ajoute une question existante à un questionnaire (jointure).

| Route                                              | Méthode | Corps de la requête |
|----------------------------------------------------|---------|---------------------|
| `/api/questionnaire/add-question/:id_questionnaire/:id_question` | POST    | Aucun corps de requête nécessaire. |

### `/api/questionnaire/recup-questions/:id_questionnaire` (GET)

Récupère toutes les questions associées à un questionnaire.

| Route                                              | Méthode | Corps de la requête |
|----------------------------------------------------|---------|---------------------|
| `/api/questionnaire/recup-questions/:id_questionnaire` | GET     | Aucun corps de requête nécessaire. |
