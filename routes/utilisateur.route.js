// fichier utilisateur.route.js
const express = require('express');
const router = express.Router();
const { checkRole, checkPermission } = require('../middlewares/auth.js');
const { getUserProfile, updateUserProfile } = require('../controllers/utilisateur.controller.js');

// Middleware pour vérifier le rôle de l'utilisateur
router.use(checkRole);

// Route pour obtenir le profil de l'utilisateur
router.get('/profile', checkPermission('view_profile'), getUserProfile);

// Route pour mettre à jour le profil de l'utilisateur
router.put('/profile', checkPermission('edit_profile'), updateUserProfile);

// Exportation du routeur avec un nom spécifique
module.exports.utilisateur = router;  // Export nommé