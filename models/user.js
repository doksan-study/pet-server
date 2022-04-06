'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      this.hasMany(models.Post);
      this.hasMany(models.Comment);
    }
  }
  User.init({
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    userName: DataTypes.STRING,
    userEmail: DataTypes.STRING,
    userPassword: DataTypes.STRING,
    userNickname: DataTypes.STRING,
    userPhone: DataTypes.STRING,
    userProfileImg: DataTypes.STRING,
    userAge: DataTypes.INTEGER,
    userGender: DataTypes.INTEGER,
    userAddress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};