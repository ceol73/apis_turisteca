'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('imagenPost', {
      idPost: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
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
    await queryInterface.dropTable('imagenPost');
  },
};
