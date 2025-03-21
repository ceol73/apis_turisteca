'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ImagenURL extends Model {
    static associate(models) {
      this.hasMany(models.ImagenLugar, { foreignKey: 'idImagen' });
      this.hasMany(models.ImagenPost, { foreignKey: 'idImagen' });
    }
  }
  ImagenURL.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      imagenURL: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ImagenURL',
      tableName: 'imagenURL',
      timestamps: false,
    }
  );
  return ImagenURL;
};
