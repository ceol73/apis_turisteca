'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ImagenURL extends Model {
    static associate(models) {
      this.hasMany(models.ImagenLugar, { foreignKey: 'idImagen', onDelete: 'CASCADE' });
      this.hasMany(models.ImagenPost, { foreignKey: 'idImagen', onDelete: 'CASCADE' });
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
