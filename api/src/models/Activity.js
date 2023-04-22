const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'activity',
    {
      // id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   allowNull: false,
      //   autoIncrement: true,
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      },
      duration: {
        type: DataTypes.INTEGER,
      },
      season: {
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
      },
      img: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true, // el nombre del modelo es igual al nombre de la tabla en la db
      timestamps: false, // elimina los campos createdAt y updatedAt en la db
    }
  );
};
