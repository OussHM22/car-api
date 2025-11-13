const carsController = require('./controllers/usersControllers');
const db = require('./database');
const express = require('express');
const cors = require('cors');
const checkApiKey = require('./middleware/checkApiKey');


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Route de test
/*
app.get('/', (req, res) => {
    res.json({
        message: "Bienvenue sur l'API de gestion de voitures classiques",
        version: "1.0.0"
    });
});
// GET - Récupérer toutes les voitures
app.get('/api/cars', (req, res) => {
    const query = 'SELECT * FROM cars ORDER BY year DESC';

    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({
                error: 'Erreur lors de la récupération des voitures',
                details: err.message
            });
        }

        res.json({
            message: 'Liste des voitures',
            count: rows.length,
            data: rows
        });
    });
});


// GET - Récupérer une voiture par ID
app.get('/api/cars/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM cars WHERE id = ?';

    db.get(query, [id], (err, row) => {
        if (err) {
            return res.status(500).json({
                error: 'Erreur serveur',
                details: err.message
            });
        }

        if (!row) {
            return res.status(404).json({
                error: 'Voiture non trouvée'
            });
        }

        res.json({
            message: 'Voiture trouvée',
            data: row
        });
    });
});


// POST - Créer une voiture
app.post('/api/cars', (req, res) => {
    res.status(201).json({
        message: "Voiture créée",
        data: req.body
    });
});

// PUT - Modifier une voiture
app.put('/api/cars/:id', (req, res) => {
    res.json({
        message: `Voiture ${req.params.id} modifiée`,
        data: req.body
    });
});

// DELETE - Supprimer une voiture
app.delete('/api/cars/:id', (req, res) => {
    res.json({ message: `Voiture ${req.params.id} supprimée` });
});
*/
// Routes CRUD reliées aux contrôleurs
/*
app.get('/api/cars', carsController.getAllCars);
app.get('/api/cars/:id', carsController.getCarById);
app.post('/api/cars', carsController.createCar);
app.put('/api/cars/:id', carsController.updateCar);
app.delete('/api/cars/:id', carsController.deleteCar);
*/

// Routes CRUD protégées par la clé API
app.get('/api/cars', checkApiKey, carsController.getAllCars);
app.get('/api/cars/:id', checkApiKey, carsController.getCarById);
app.post('/api/cars', checkApiKey, carsController.createCar);
app.put('/api/cars/:id', checkApiKey, carsController.updateCar);
app.delete('/api/cars/:id', checkApiKey, carsController.deleteCar);


// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
