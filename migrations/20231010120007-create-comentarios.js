'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comentarios', {
      idPost: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id',
        },
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      contenido: {
        type: Sequelize.TEXT,
      },
      creado_en: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addConstraint('comentarios', {
      fields: ['idPost', 'idUsuario'],
      type: 'primary key',
      name: 'pk_comentarios',
    });

    await queryInterface.addConstraint('comentarios', {
      fields: ['idPost', 'idUsuario'],
      type: 'unique',
      name: 'uq_comentarios_idPost_idUsuario',
    });

    await queryInterface.addIndex('comentarios', ['idPost'], {
      name: 'idx_idPost',
    });
    await queryInterface.addIndex('comentarios', ['idUsuario'], {
      name: 'idx_idUsuario',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('comentarios', 'uq_comentarios_idPost_idUsuario');

    await queryInterface.removeIndex('comentarios', 'idx_idPost');
    await queryInterface.removeIndex('comentarios', 'idx_idUsuario');

    await queryInterface.dropTable('comentarios');
  },
};
