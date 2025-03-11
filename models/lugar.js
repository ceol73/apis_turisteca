'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lugar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lugar.belongsTo(models.Categoria, { foreignKey: "idCategoria", onDelete: "CASCADE" });

      Lugar.belongsToMany(models.ImagenURL, {
        through: models.ImagenLugar,
        foreignKey: "idLugar",
        onDelete: "CASCADE",
      });

      Lugar.hasMany(models.Viaje, { foreignKey: "idLugar", onDelete: "CASCADE" });
    }
  }
  Lugar.init({
    id: DataTypes.INTEGER,
    coordLat: DataTypes.FLOAT,
    coordLon: DataTypes.FLOAT,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    idImagen: DataTypes.INTEGER,
    idCategoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lugar',
  });
  return Lugar;
};