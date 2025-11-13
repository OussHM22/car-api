// Middleware pour vérifier la clé API
const checkApiKey = (req, res, next) => {
    // On récupère la clé dans les headers
    const apiKey = req.headers['x-api-key'];

    // Clé API attendue (en vrai projet on la mettrait dans process.env)
    const validApiKey = 'ma-super-cle-api-2024';

    // Si aucune clé n'est envoyée
    if (!apiKey) {
        return res.status(401).json({
            error: 'Non autorisé',
            message: 'Clé API manquante. Ajoutez le header x-api-key à votre requête'
        });
    }

    // Si la clé n'est pas la bonne
    if (apiKey !== validApiKey) {
        return res.status(403).json({
            error: 'Accès refusé',
            message: 'Clé API invalide'
        });
    }

    // Si tout est bon, on laisse passer vers la route suivante
    console.log('✅ Clé API valide');
    next();
};

module.exports = checkApiKey;
