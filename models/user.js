'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {

    static associate(models) {
      this.hasMany(models.post);
      this.hasMany(models.comment);
      this.hasMany(models.pet);
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
  }, {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: 'user',
    tableName: 'User',
  });
  return user;
};