'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comentarios.belongsTo(models.Post, { foreignKey: "idPost", onDelete: "CASCADE" });

      Comentarios.belongsTo(models.User, { foreignKey: "idUser", onDelete: "CASCADE" });

      Comentarios.hasMany(models.ReaccionesComentarios, {
        foreignKey: "idComPost",
        sourceKey: "idPost",
        onDelete: "CASCADE",
      });

      Comentarios.hasMany(models.ReaccionesComentarios, {
        foreignKey: "idComUser",
        sourceKey: "idUser",
        onDelete: "CASCADE",
      });
    }
  }
  Comentarios.init({
    idPost: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    contenido: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comentarios',
  });
  return Comentarios;
};