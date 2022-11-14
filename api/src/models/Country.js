const { DataTypes, ForeignKeyConstraintError } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {

    id: {
      primaryKey: true,
      type: DataTypes.STRING(3),
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    flags: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      }
    },

    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isIn: [['Africa', 'America', 'Antarctica', 'Asia', 'Europe', 'Oceania']]
      // }
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    population: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }, 

  },
  {
    timestamps: false,
  });
};
