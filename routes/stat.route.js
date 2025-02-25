
// Route pour récupérer les statistiques
router.get('/api/stats/:id_utilisateur', async (req, res) => {
    const id_utilisateur = req.params.id_utilisateur;
    const stats = await getStats(id_utilisateur);
    res.json(stats);
});
