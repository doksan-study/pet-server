"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class post extends Model {

    static associate(models) {
      this.hasMany(models.comment, { foreignKey: "post_id" }); // 1 : N (post : comment)
      this.belongsTo(models.user); // 1 : N (user : post)
    }
  }
  post.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
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
    modelName: "post",
    tableName: "Post",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci"
  });
  return post;
};