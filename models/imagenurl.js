'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImagenURL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ImagenURL.hasMany(models.ImagenLugar, {
        foreignKey: "idImagen",
        onDelete: "CASCADE",
      });

      ImagenURL.hasMany(models.ImagenPost, {
        foreignKey: "idImagen",
        onDelete: "CASCADE",
      });

      ImagenURL.hasMany(models.Lugar, {
        foreignKey: "idImagen",
        onDelete: "SET NULL", // Si se elimina la imagen, el campo en `Lugar` quedará NULL
      });

      ImagenURL.hasMany(models.Post, {
        foreignKey: "idImagen",
        onDelete: "SET NULL",
      });
    }
  }
  ImagenURL.init({
    imagenURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ImagenURL',
  });
  return ImagenURL;
};