'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reaccion extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  Reaccion.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Reaccion',
      tableName: 'reaccion',
      timestamps: false,
    }
  );
  return Reaccion;
};
