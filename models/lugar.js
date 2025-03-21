'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Lugar extends Model {
    static associate(models) {
      this.belongsTo(models.Categoria, { foreignKey: 'idCategoria' });
      this.hasMany(models.Viaje, { foreignKey: 'idLugar' });
      this.hasMany(models.ImagenLugar, { foreignKey: 'idLugar' });
    }
  }
  Lugar.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      coordLat: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      coordLon: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
      idImagen: {
        type: DataTypes.INTEGER,
      },
      idCategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'categoria',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Lugar',
      tableName: 'lugar',
      timestamps: false,
    }
  );
  return Lugar;
};
