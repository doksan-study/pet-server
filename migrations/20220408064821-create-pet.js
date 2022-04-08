'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pet', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      find_place: {
        type: Sequelize.STRING
      },
      find_date: {
        type: Sequelize.DATE
      },
      name: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      specificity: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.INTEGER
      },
      finder_phone: {
        type: Sequelize.STRING
      },
      create_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pet');
  }
};