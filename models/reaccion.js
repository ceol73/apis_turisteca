'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reaccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reaccion.hasMany(models.ReaccionesPost, {
        foreignKey: "reaccionTipo",
        onDelete: "CASCADE",
      });

      Reaccion.hasMany(models.ReaccionesComentarios, {
        foreignKey: "reaccionTipo",
        onDelete: "CASCADE",
      });
    }
  }
  Reaccion.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reaccion',
  });
  return Reaccion;
};