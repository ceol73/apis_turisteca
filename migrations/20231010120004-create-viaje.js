'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('viaje', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      idLugar: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'lugar',
          key: 'id',
        },
      },
      fecha: {
        type: Sequelize.DATE,
      },
      huella: {
        type: Sequelize.FLOAT,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('viaje');
  },
};
