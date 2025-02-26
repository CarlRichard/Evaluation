

// function checkRole(req, res, next) {
//     // Exemple de vérification de rôle
//     if (req.utilisateur && req.utilisateur.role) {
//         next();
//     } else {
//         res.status(403).json({ message: 'Accès refusé : rôle non autorisé' });
//     }
// }

// function checkPermission(permission) {
//     return (req, res, next) => {
//         // Exemple de vérification de permission
//         if (req.utilisateur && req.utilisateur.permissions && req.utilisateur.permissions.includes(permission)) {
//             next();
//         } else {
//             res.status(403).json({ message: `Accès refusé : permission '${permission}' non accordée` });
//         }
//     };
// }

// module.exports = { checkRole, checkPermission };