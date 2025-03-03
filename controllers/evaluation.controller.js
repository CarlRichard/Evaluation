import Evaluation from '../models/evaluation.model.js';
import Question from '../models/question.model.js';
import Reponse from '../models/reponse.model.js';
import Utilisateur from '../models/utilisateur.model.js';

// Création d'une évaluation

export const createEvaluation = async (req, res) => {
  try {
    // Utiliser l'ID utilisateur du token
    const id_evaluateur = req.user.id;

    const { commentaire, id_reponse, note_formateur } = req.body;


    // Récupérer la réponse correspondant à id_reponse
    const reponse = await Reponse.findOne({ where: { id: id_reponse } });

    if (!reponse) {
      return res.status(404).json({ message: 'Réponse non trouvée' });
    }

    // Utiliser l'id_utilisateur de la réponse comme id_evalue
    const id_evalue = reponse.id_utilisateur;

    // Créer l'évaluation
    const evaluation = await Evaluation.create({
      id_evaluateur,
      id_evalue,  // id_utilisateur récupéré depuis la réponse
      commentaire,
      id_reponse,
      note_formateur
    });

    res.status(201).json({ message: 'Évaluation créée avec succès', evaluation });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'évaluation', error });
  }
};

// Récup les évaluations
export const getAllEvaluation = async (req, res) => {
  try {
    const evaluations = await Evaluation.findAll({
      include: [
        {
          model: Utilisateur,
          as: 'evaluateur',
          attributes: ['id', 'nom', 'prenom'],
        },
        {
          model: Utilisateur,
          as: 'evalue',
          attributes: ['id', 'nom', 'prenom'],
        },
        {
          model: Reponse,
          as: 'reponse',  // Utilisation de l'alias "reponse"
          attributes: ['rep'],
          include: [
            {
              model: Question,
              as: 'question',  // Vérifie que cet alias correspond à celui dans ton modèle
              attributes: ['id', 'titre', 'description'],  // Inclure les informations de la question
            }
          ]
        }
      ]
    });

    // Si aucune évaluation n'est trouvée
    if (!evaluations.length) {
      return res.status(404).json({ message: 'Aucune évaluation trouvée' });
    }

    res.status(200).json({ evaluations });
  } catch (error) {
    console.error(error);  // Afficher l'erreur pour déboguer
    res.status(500).json({ message: 'Erreur lors de la récupération des évaluations', error });
  }
};


// Récupérer par ID
export const getEvaluation = async (req, res) => {
  try {
    const evaluation = await Evaluation.findByPk(req.params.id, {
      include: [
        {
          model: Utilisateur,
          as: 'evaluateur',
          attributes: ['id', 'nom', 'prenom']
        },
        {
          model: Utilisateur,
          as: 'evalue',
          attributes: ['id', 'nom', 'prenom']
        },
        {
          model: Reponse,
          as: 'reponse',  // Utilisation de l'alias "reponse"
          attributes: ['rep'],
          include: [
            {
              model: Question,
              as: 'question',  // Assurez-vous que l'alias correspond à celui défini dans le modèle Reponse
              attributes: ['titre']  // Nous incluons le titre de la question
            }
          ]
        }
      ]
    });

    if (!evaluation) {
      return res.status(404).json({ message: 'Évaluation non trouvée' });
    }

    res.status(200).json({ evaluation });
  } catch (error) {
    console.error(error);  // Afficher l'erreur dans les logs pour plus de détails
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'évaluation', error });
  }
};



// Maj d'une éval
export const updateEvaluation = async (req, res) => {
  try {
    const { commentaire } = req.body;
    const [updated] = await Evaluation.update({ commentaire }, {
      where: { id: req.params.id }
    });

    if (!updated) {
      return res.status(404).json({ message: 'Évaluation non trouvée' });
    }

    res.status(200).json({ message: 'Évaluation mise à jour avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'évaluation', error });
  }
};

// Supprimer
export const deleteEvaluation = async (req, res) => {
  try {
    const deleted = await Evaluation.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Évaluation non trouvée' });
    }

    res.status(200).json({ message: 'Évaluation supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'évaluation', error });
  }
};


//recup de tous un formulaire:
export const getReponsesParQuestionnaire = async (req, res) => {
  try {
    const { id_questionnaire } = req.params; // ID du questionnaire à récupérer

    // Trouver le questionnaire par son ID
    const questionnaire = await Questionnaire.findByPk(id_questionnaire, {
      include: [
        {
          model: Question,
          as: 'questions', // Alias des questions liées au questionnaire
          attributes: ['id', 'titre', 'description'],
          include: [
            {
              model: Reponse,
              as: 'reponses', // Alias des réponses liées à chaque question
              attributes: ['id', 'rep', 'id_utilisateur'], // Réponse et l'utilisateur qui a répondu
              include: [
                {
                  model: Utilisateur,
                  as: 'utilisateur', // L'utilisateur qui a donné la réponse
                  attributes: ['id', 'nom', 'prenom'],
                }
              ]
            }
          ]
        }
      ]
    });

    // Vérifier si le questionnaire existe
    if (!questionnaire) {
      return res.status(404).json({ message: 'Questionnaire non trouvé' });
    }

    // Si le questionnaire est trouvé, renvoyer les réponses
    res.status(200).json({ questionnaire });
  } catch (error) {
    console.error(error); // Affichage de l'erreur pour le débogage
    res.status(500).json({ message: 'Erreur lors de la récupération des réponses', error });
  }
};
