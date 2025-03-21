'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Viaje extends Model {
    static associate(models) {
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
      this.belongsTo(models.Lugar, { foreignKey: 'idLugar' });
    }
  }
  Viaje.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      idLugar: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'lugar',
          key: 'id',
        },
      },
      fecha: {
        type: DataTypes.DATE,
      },
      huella: {
        type: DataTypes.FLOAT,
      },
    },
    {
      sequelize,
      modelName: 'Viaje',
      tableName: 'viaje',
      timestamps: false,
    }
  );
  return Viaje;
};
