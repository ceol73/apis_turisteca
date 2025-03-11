'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: "idUser", onDelete: "CASCADE" });

      Post.belongsToMany(models.ImagenURL, {
        through: models.ImagenPost,
        foreignKey: "idPost",
        onDelete: "CASCADE",
      });

      Post.hasMany(models.Comentario, { foreignKey: "idPost", onDelete: "CASCADE" });

      Post.hasMany(models.ReaccionesPost, { foreignKey: "idPost", onDelete: "CASCADE" });
    }
  }
  Post.init({
    contenido: DataTypes.TEXT,
    idImagen: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};