'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comment.belongsTo(models.Post, {foreignKey: 'postId'})
    }
  };
  Comment.init({
    commentId: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 이모티콘 저장
  });
  return Comment;
};