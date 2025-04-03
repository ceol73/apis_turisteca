'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reaccionesComentarios', {
      idPost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      reaccionTipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'reaccion',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      creado_en: {
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint('reaccionesComentarios', {
      fields: ['idPost', 'idUsuario'],
      type: 'foreign key',
      name: 'fk_reaccionesComentarios_comentarios',
      references: {
        table: 'comentarios',
        fields: ['idPost', 'idUsuario'],
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reaccionesComentarios');
  },
};
