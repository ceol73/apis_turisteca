'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ImagenPost extends Model {
    static associate(models) {
      this.belongsTo(models.Post, { foreignKey: 'idPost' });
      this.belongsTo(models.ImagenURL, { foreignKey: 'idImagen' });
    }
  }
  ImagenPost.init(
    {
      idPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id',
        },
      },
      idImagen: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'imagenURL',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'ImagenPost',
      tableName: 'imagenPost',
      timestamps: false,
    }
  );
  return ImagenPost;
};
