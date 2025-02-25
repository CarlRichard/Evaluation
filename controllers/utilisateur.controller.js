function getUserProfile(req, res) {
    // Exemple de récupération du profil utilisateur
    const userProfile = {
        id: req.utilisateur.id,
        nom: req.utilisateur.nom,
        prenom: req.utilisateur.prenom,
        email: req.utilisateur.email,
        role: req.utilisateur.role,
        permissions: req.utilisateur.permissions
    };
    res.json(userProfile);
}

function updateUserProfile(req, res) {
    // Exemple de mise à jour du profil utilisateur
    const updatedProfile = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email
    };
    // Logique pour mettre à jour le profil dans la base de données
    res.json({ message: 'Profil mis à jour avec succès', profile: updatedProfile });
}

module.exports = { getUserProfile, updateUserProfile };