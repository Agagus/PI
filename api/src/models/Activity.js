// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5,
            }
        },

        duration: {
            type: DataTypes.INTEGER,
        },

        season: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['summer', 'autumn', 'winter', 'spring']],
            }
        }
    })
}