const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Employe = sequelize.define('Employe', {
    nom : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prenom : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    poste: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    heureArrivee: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: '07:00:00',
    },
    heureDepart: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: '15:00:00',
    },
    heuresTravalleSemaine: {
        type: DataTypes.FLOAT,
        defaultValue: 35, 
    },
    heuresSup: {
        type: DataTypes.FLOAT,
        defaultValue: 0, 
    },
    absences: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    congesPris: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
}, {
    timestamps: true,
});

module.exports = Employe;