'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      ID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      ProductID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'product',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      Shipping_Address: {
        type: Sequelize.STRING,
      },
      Shipping_Date: {
        type: Sequelize.DATEONLY
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};