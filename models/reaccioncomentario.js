'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReaccionComentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReaccionComentario.belongsTo(models.Comentarios, {
        foreignKey: "idComPost",
        targetKey: "idPost",
        onDelete: "CASCADE",
      });

      ReaccionComentario.belongsTo(models.Comentarios, {
        foreignKey: "idComUser",
        targetKey: "idUser",
        onDelete: "CASCADE",
      });

      ReaccionComentario.belongsTo(models.Reaccion, {
        foreignKey: "reaccionTipo",
        targetKey: "id",
        onDelete: "CASCADE",
      });
    }
  }
  ReaccionComentario.init({
    idComPost: DataTypes.INTEGER,
    idComUser: DataTypes.INTEGER,
    reaccionTipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ReaccionComentario',
  });
  return ReaccionComentario;
};