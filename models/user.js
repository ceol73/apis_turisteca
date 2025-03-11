'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Viaje, { foreignKey: "idUsuario", onDelete: "CASCADE" });

      User.hasMany(models.Post, { foreignKey: "idUsuario", onDelete: "CASCADE" });

      User.hasMany(models.Comentario, { foreignKey: "idUsuario", onDelete: "CASCADE" });

      User.belongsToMany(models.User, {
        through: models.Follows,
        as: "Seguidos",
        foreignKey: "idSeguidor",
        onDelete: "CASCADE",
      });

      User.belongsToMany(models.User, {
        through: models.Follows,
        as: "Seguidores",
        foreignKey: "idSeguido",
        onDelete: "CASCADE",
      });

      User.hasMany(models.ReaccionesPost, { foreignKey: "idPost", onDelete: "CASCADE" });

      User.hasMany(models.ReaccionesComentarios, { foreignKey: "idComUser", onDelete: "CASCADE" });
    }
  }
  User.init({
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    google_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};