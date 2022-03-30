'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      // define association here
      db.Post.hasMany(db.Comment, {foreignKey: "postId"})
      db.Post.belongsTo(db.User, {foreignKey: "userId"})
    }
  }
  Post.init({
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    postTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postContent: {
      type: DataTypes.STRING,
      allowNull: false // null 허용 설정
    },
  }, {
    sequelize,
    modelName: 'Post',
    // tableName: 'posts',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 이모티콘 저장
  });
  return Post;
};