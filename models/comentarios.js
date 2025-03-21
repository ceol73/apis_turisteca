'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comentarios extends Model {
    static associate(models) {
      this.belongsTo(models.Post, { foreignKey: 'idPost' });
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
      this.hasMany(models.ReaccionesComentarios, { foreignKey: 'idComPost' });
    }
  }
  Comentarios.init(
    {
      idPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id',
        },
      },
      idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      contenido: {
        type: DataTypes.TEXT,
      },
      creado_en: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Comentarios',
      tableName: 'comentarios',
      timestamps: false,
    }
  );
  return Comentarios;
};
