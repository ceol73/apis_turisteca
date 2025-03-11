'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imagenPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ImagenPost.belongsTo(models.Post, {
        foreignKey: "idPost",
        onDelete: "CASCADE",
      });

      ImagenPost.belongsTo(models.ImagenURL, {
        foreignKey: "idImagen",
        onDelete: "CASCADE",
      });
    }
  }
  imagenPost.init({
    idPost: DataTypes.INTEGER,
    idImagen: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'imagenPost',
  });
  return imagenPost;
};