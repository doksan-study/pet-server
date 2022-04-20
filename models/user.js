"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {

    static associate(models) {
      this.hasMany(models.post); // 1 : N (user : post)
      this.hasMany(models.comment); // 1 : N (user : comment)
      this.hasMany(models.pet); // 1 : N (user : pet)
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    nickname: DataTypes.STRING,
    phone: DataTypes.STRING,
    profile_image: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    delete_status: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    },
  }, {
    sequelize,
    underscored: true,
    freezeTableName: true,
    timestamps: false,
    modelName: "user",
    tableName: "User"
  });
  return user;
};