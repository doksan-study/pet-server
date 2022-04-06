'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate(models) {
      this.belongsTo(models.User);
    }
  }
  Post.init({
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    postTitle: DataTypes.STRING,
    postContent: DataTypes.STRING,
    postImages: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};