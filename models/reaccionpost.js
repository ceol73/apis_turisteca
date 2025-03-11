'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReaccionPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReaccionPost.belongsTo(models.Post, {
        foreignKey: "idPost",
        targetKey: "id",
        onDelete: "CASCADE",
      });

      ReaccionPost.belongsTo(models.Reaccion, {
        foreignKey: "reaccionTipo",
        targetKey: "id",
        onDelete: "CASCADE",
      });
    }
  }
  ReaccionPost.init({
    idPost: DataTypes.INTEGER,
    reaccionTipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ReaccionPost',
  });
  return ReaccionPost;
};