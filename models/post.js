'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.belongsTo(models.Usuario, { foreignKey: 'idUsuario' });
      this.hasMany(models.Comentarios, { foreignKey: 'idPost' });
      this.hasMany(models.ReaccionesPost, { foreignKey: 'idPost' });
      this.hasMany(models.ImagenPost, { foreignKey: 'idPost', onDelete: 'CASCADE' });
    }
  }
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      contenido: {
        type: DataTypes.TEXT,
      },
      idImagen: {
        type: DataTypes.INTEGER,
      },
      idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      creado_en: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'post',
      timestamps: false,
    }
  );
  return Post;
};
