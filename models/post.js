'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class post extends Model {

    static associate(models) {
      this.belongsTo(models.user);
    }
  }
  post.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: 'post',
    tableName: 'Post',
  });
  return post;
};