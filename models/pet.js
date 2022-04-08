'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class pet extends Model {

    static associate(models) {
      this.belongsTo(models.user);
    }
  }
  pet.init({
    image: DataTypes.STRING,
    find_place: DataTypes.STRING,
    find_date: DataTypes.DATE,
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    gender: DataTypes.STRING,
    specificity: DataTypes.STRING,
    age: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    finder_phone: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: 'pet',
    tableName: 'Pet',
  });
  return pet;
};