'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class UsuarioDetalles extends Model {
        static associate(models) {
            this.belongsTo(models.Usuario, { foreignKey: 'id', onDelete: 'CASCADE' });
            this.belongsTo(models.ImagenURL, { foreignKey: 'img_perfil', onDelete: 'SET NULL' });
        }
    }
    UsuarioDetalles.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'usuario',
                    key: 'id',
                },
            },
            nombre: {
                type: DataTypes.STRING,
            },
            img_perfil: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'imagenURL',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            modelName: 'UsuarioDetalles',
            tableName: 'usuario_detalles',
            timestamps: false,
        }
    );
    return UsuarioDetalles;
};
