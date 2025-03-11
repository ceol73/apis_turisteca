'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lugars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coordLat: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      coordLon: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      idImagen: {
        type: Sequelize.INTEGER
      },
      idCategoria: {
        allowNull: false,
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
    await queryInterface.dropTable('Lugars');
  }
};