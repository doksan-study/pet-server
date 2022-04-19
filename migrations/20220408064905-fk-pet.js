"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "Pet",
      "user_id",
      {
        type: Sequelize.INTEGER,
        allowNull: false, // 필수 값 false
        references: { // 참조 할 model 이름과 key 이름
          model: "user",
          key: "id",
        },
        onUpdate: "CASCADE", // 
        onDelete: "CASCADE", // 
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      "Pet",
      "user_id",
    );
  }
};
