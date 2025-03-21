'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reaccionesComentarios', {
      idComPost: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'comentarios',
          key: 'idPost',
        },
      },
      idComUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'comentarios',
          key: 'idUsuario',
        },
      },
      reaccionTipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      creado_en: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reaccionesComentarios');
  },
};
