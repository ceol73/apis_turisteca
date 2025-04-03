'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ReaccionesComentarios extends Model {
    static associate(models) {
      this.belongsTo(models.Comentarios, { foreignKey: 'idComPost' });
      this.belongsTo(models.Comentarios, { foreignKey: 'idComUser' });
      this.belongsTo(models.Reaccion, { foreignKey: 'reaccionTipo' });
    }
  }
  ReaccionesComentarios.init(
    {
      idComPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'comentarios',
          key: 'idPost',
        },
      },
      idComUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'comentarios',
          key: 'idUsuario',
        },
      },
      reaccionTipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      creado_en: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'ReaccionesComentarios',
      tableName: 'reaccionesComentarios',
      timestamps: false,
    }
  );
  return ReaccionesComentarios;
};
