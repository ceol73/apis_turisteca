'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      this.hasMany(models.Post, { foreignKey: 'idUsuario' });
      this.hasMany(models.Viaje, { foreignKey: 'idUsuario' });
      this.hasMany(models.Follows, { foreignKey: 'idSeguidor' });
      this.hasMany(models.Comentarios, { foreignKey: 'idUsuario' });
    }
  }
  Usuario.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      google_id: {
        type: DataTypes.STRING,
        unique: true,
      },
      refresh_token: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Usuario',
      tableName: 'usuario',
      timestamps: false,
    }
  );
  return Usuario;
};
