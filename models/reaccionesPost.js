'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ReaccionesPost extends Model {
    static associate(models) {
      this.belongsTo(models.Post, { foreignKey: 'idPost' });
      this.belongsTo(models.Reaccion, { foreignKey: 'reaccionTipo' });
    }
  }
  ReaccionesPost.init(
    {
      idPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id',
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
      modelName: 'ReaccionesPost',
      tableName: 'reaccionesPost',
      timestamps: false,
    }
  );
  return ReaccionesPost;
};
