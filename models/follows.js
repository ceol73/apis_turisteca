'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Follows.belongsTo(models.User, {
        foreignKey: "idSeguidor",
        as: "Seguidor",
        onDelete: "CASCADE",
      });

      Follows.belongsTo(models.User, {
        foreignKey: "idSeguido",
        as: "Seguido",
        onDelete: "CASCADE",
      });
    }
  }
  Follows.init({
    idSeguido: DataTypes.INTEGER,
    idSeguidor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Follows',
  });
  return Follows;
};