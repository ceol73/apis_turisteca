'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('imagenLugar', {
      idLugar: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'lugar',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      idImagen: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'imagenURL',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('imagenLugar');
  },
};
