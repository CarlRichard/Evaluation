
// Route pour récupérer les statistiques
router.get('/api/stats/evaluations/:userId', async (req, res) => {
    const userId = req.params.userId;
    const stats = await getStats(userId);
    res.json(stats);
});
