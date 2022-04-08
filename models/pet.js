'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pet.init({
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
    modelName: 'Pet',
  });
  return Pet;
};