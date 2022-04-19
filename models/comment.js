"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class comment extends Model {

    static associate(models) {
      this.belongsTo(models.user);
    }
  }
  comment.init({
    content: DataTypes.STRING,
    delete_status: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    }
  }, {
    sequelize,
    underscored: true,
    freezeTableName: true,
    timestamps: false,
    modelName: "comment",
    tableName: "Comment"
  });
  return comment;
};