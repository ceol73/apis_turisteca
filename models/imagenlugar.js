'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ImagenLugar extends Model {
    static associate(models) {
      this.belongsTo(models.Lugar, { foreignKey: 'idLugar' });
      this.belongsTo(models.ImagenURL, { foreignKey: 'idImagen' });
    }
  }
  ImagenLugar.init(
    {
      idLugar: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'lugar',
          key: 'id',
        },
      },
      idImagen: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'imagenURL',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'ImagenLugar',
      tableName: 'imagenLugar',
      timestamps: false,
    }
  );
  return ImagenLugar;
};
