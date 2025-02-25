function getUserProfile(req, res) {
    // Exemple de récupération du profil utilisateur
    const userProfile = {
        id: req.user.id,
        name: req.user.nom,
        email: req.user.email,
        role: req.user.role,
        permissions: req.user.permissions
    };
    res.json(userProfile);
}

function updateUserProfile(req, res) {
    // Exemple de mise à jour du profil utilisateur
    const updatedProfile = {
        name: req.body.name,
        email: req.body.email
    };
    // Logique pour mettre à jour le profil dans la base de données
    res.json({ message: 'Profil mis à jour avec succès', profile: updatedProfile });
}

module.exports = { getUserProfile, updateUserProfile };