'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReaccionComentarios', {
      idComPost: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idComUser: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reaccionTipo: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ReaccionComentarios');
  }
};