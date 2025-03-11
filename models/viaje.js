'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Viaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Viaje.belongsTo(models.User, { foreignKey: "idUsuario", onDelete: "CASCADE" });

      Viaje.belongsTo(models.Lugar, { foreignKey: "idLugar", onDelete: "CASCADE" });
    }
  }
  Viaje.init({
    idUsuario: DataTypes.INTEGER,
    idLugar: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    huella: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Viaje',
  });
  return Viaje;
};