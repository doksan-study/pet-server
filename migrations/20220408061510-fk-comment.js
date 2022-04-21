"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Comment", "user_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("Comment", {
      fields: ["user_id"],
      type: "foreign key",
      references: {
        table: "User",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Comment", "user_id",);
  }
};
