'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImagenLugar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ImagenLugar.belongsTo(models.Lugar, {
        foreignKey: "idLugar",
        onDelete: "CASCADE",
      });

      ImagenLugar.belongsTo(models.ImagenURL, {
        foreignKey: "idImagen",
        onDelete: "CASCADE",
      });
    }
  }
  ImagenLugar.init({
    idLugar: DataTypes.INTEGER,
    idImagen: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ImagenLugar',
  });
  return ImagenLugar;
};