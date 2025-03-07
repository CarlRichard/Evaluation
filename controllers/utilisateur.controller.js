import Utilisateur from "../models/utilisateur.model.js";
import bcrypt from "bcryptjs";

// POST - Créer un utilisateur
export const createUtilisateur = async (req, res) => {
  try {
    const { nom, prenom, email, role, formation, mot_de_passe } = req.body;

    const utilisateur = await Utilisateur.create({
      nom,
      prenom,
      email,
      role,
      formation,
      mot_de_passe
    });

    res.status(201).json({ message: "Utilisateur créé avec succès", utilisateur });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la création de l'utilisateur", error: error.message });
  }
};

// Récupérer tous les utilisateurs sans afficher les mots de passe
export const getAllUtilisateur = async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.findAll({
            attributes: { exclude: ['mot_de_passe'] } // Exclure le mot de passe
        });

        res.status(200).json({ utilisateurs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs", error: error.message });
    }
};

// Récupérer un utilisateur par ID sans afficher le mot de passe
export const getUtilisateur = async (req, res) => {
    try {
        const { id } = req.params;
        const utilisateur = await Utilisateur.findByPk(id, {
            attributes: { exclude: ['mot_de_passe'] } // Exclure le mot de passe
        });

        if (!utilisateur) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.status(200).json({ utilisateur });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur", error: error.message });
    }
};


// Patch - Mettre à jour un utilisateur
export const updateUtilisateur = async (req, res) => {
  const { id } = req.params;
  const { email, mot_de_passe, role, formation  } = req.body;
  
  try {
    const utilisateur = await Utilisateur.findByPk(id);

    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Mettre à jour uniquement les champs fournis dans la requête
    if (email) {
      utilisateur.email = email;
    }
    
    if (mot_de_passe) {
      utilisateur.mot_de_passe = mot_de_passe;
    }

    if (role) {
      utilisateur.role = role;
    }

    if (formation) {
      utilisateur.formation = formation;
    }

    await utilisateur.save();
    res.status(200).json({ message: 'Utilisateur mis à jour avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur', error: error.message });
  }
};

// Méthode pour mettre à jour un utilisateur
export const PutUtilisateur = async (req, res) => {
  try {
    const { nom, prenom, email, role, formation, mot_de_passe } = req.body;
    const utilisateurId = req.params.id;

    // Vérifier si l'utilisateur existe
    const utilisateur = await Utilisateur.findByPk(utilisateurId);

    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Mettre à jour les informations de l'utilisateur
    utilisateur.nom = nom || utilisateur.nom;  
    utilisateur.prenom = prenom || utilisateur.prenom;
    utilisateur.email = email || utilisateur.email;
    utilisateur.role = role !== undefined ? role : utilisateur.role; 
    utilisateur.formation = formation || utilisateur.formation;
    
    // Si un mot de passe est fourni, le hacher et le mettre à jour
    if (mot_de_passe) {
      utilisateur.mot_de_passe = mot_de_passe;
    }

    // Sauvegarder les modifications dans la base de données
    await utilisateur.save();

    // Retourner la réponse avec les informations de l'utilisateur mis à jour
    res.status(200).json({
      message: 'Utilisateur mis à jour avec succès',
      utilisateur
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Erreur lors de la mise à jour de l\'utilisateur',
      error
    });
  }
};


// DELETE - Supprimer un utilisateur
export const deleteUtilisateur = async (req, res) => {
  try {
    const { id } = req.params;
    const utilisateur = await Utilisateur.findByPk(id);

    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    await utilisateur.destroy();

    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la suppression de l'utilisateur", error: error.message });
  }
};
