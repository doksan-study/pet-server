"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Pet", "user_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("Pet", {
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
    await queryInterface.removeColumn("Pet", "user_id",);
  }
};
