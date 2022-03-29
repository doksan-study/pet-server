'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    userId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userName: DataTypes.STRING(100),
    userEmail: DataTypes.STRING(100),
    userPassword: DataTypes.STRING(100),
    userNickname: DataTypes.STRING(100),
    userPhone: DataTypes.STRING(100),
    userProfileImg: DataTypes.STRING(100),
    userAge: DataTypes.INTEGER,
    userGender: DataTypes.INTEGER,
    userAddress: DataTypes.STRING(100)
  }, {
    sequelize,
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', //이모티콘 저장
    modelName: 'User',
  });
  return User;
};