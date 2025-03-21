'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Follows extends Model {
    static associate(models) {
      this.belongsTo(models.Usuario, { foreignKey: 'idSeguidor' });
      this.belongsTo(models.Usuario, { foreignKey: 'idSeguido' });
    }
  }
  Follows.init(
    {
      idSeguido: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      idSeguidor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      creado_en: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Follows',
      tableName: 'follows',
      timestamps: false,
    }
  );
  return Follows;
};
