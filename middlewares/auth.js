function checkRole(req, res, next) {
    // Exemple de vérification de rôle
    if (req.user && req.user.role) {
        next();
    } else {
        res.status(403).json({ message: 'Accès refusé : rôle non autorisé' });
    }
}

function checkPermission(permission) {
    return (req, res, next) => {
        // Exemple de vérification de permission
        if (req.user && req.user.permissions && req.user.permissions.includes(permission)) {
            next();
        } else {
            res.status(403).json({ message: `Accès refusé : permission '${permission}' non accordée` });
        }
    };
}

module.exports = { checkRole, checkPermission };