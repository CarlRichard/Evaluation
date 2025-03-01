import Evaluation from '../models/evaluation.model.js';
import Reponse from '../models/reponse.model.js';
import Utilisateur from '../models/utilisateur.model.js';

// Création d'une évaluation
export const createEvaluation = async (req, res) => {
  try {

    // Utiliser l'ID utilisateur du token
    const id_evaluateur = req.user.id; 

    const {  id_evalue, commentaire , id_reponse } = req.body;
    const evaluation = await Evaluation.create({
      id_evaluateur, 
      id_evalue, 
      commentaire, 
      id_reponse 
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
          attributes: ['id', 'nom', 'prenom']
        },
        {
          model: Utilisateur,
          as: 'evalue',
          attributes: ['id', 'nom', 'prenom']
        },
        {
          model: Reponse,
          as: 'reponse',
          attributes: ['rep']
        }
      ]
    });
    res.status(200).json({ evaluations });
  } catch (error) {
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
          as: 'reponse',
          attributes: ['rep']
        }
      ]
    });

    if (!evaluation) {
      return res.status(404).json({ message: 'Évaluation non trouvée' });
    }

    res.status(200).json({ evaluation });
  } catch (error) {
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
