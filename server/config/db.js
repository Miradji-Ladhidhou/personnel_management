const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port : process.env.DB_PORT,
        dialect: 'postgres',
        logging: false, // Desactiver les logs de requêtes SQL
    }
);

// Test de connexion avec une requête SQL simple
sequelize.query("SELECT NOW()").then(([results]) => {
  console.log("Test SQL OK - Heure actuelle :", results);
}).catch((err) => {
  console.error("La requête a échoué :", err);
});


// Test the database connection
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à postgreSQL réussie !');
    } catch (error) {
        console.error('Erreur de connexion', error);
    }
};

// Export de la connexion sequelize et de la fonction connectDB
module.exports = { sequelize, connectDB };

