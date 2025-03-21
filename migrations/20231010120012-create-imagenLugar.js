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
      },
      idImagen: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'imagenURL',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('imagenLugar');
  },
};
