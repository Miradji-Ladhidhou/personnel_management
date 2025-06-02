const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { connectDB } = require('./config/db');

// Importer le modèle Employe
const Employe = require('./models/employe.model');
Employe.sync({ alter: true }) // Synchroniser le modèle avec la base de données
  .then(() => {
    console.log('Modèle staff synchronisé avec succès.');
  })
  .catch((error) => {
    console.error('Erreur lors de la synchronisation du modèle staff:', error);
  });

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes de test 
app.get('/', (req, res) => {
  res.send('Serveur en cours d\'exécution !');
});

// Connexion à la base de données postgreSQL
connectDB();
  

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});