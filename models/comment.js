'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class comment extends Model {

    static associate(models) {
      this.belongsTo(models.user);
    }
  }
  comment.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: 'comment',
    tableName: 'Comment'
  });
  return comment;
};