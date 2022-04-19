"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class comment extends Model {

    static associate(models) {
      this.belongsTo(models.user); // 1 : N (user : comment)
    }
  }
  comment.init({
    content: DataTypes.STRING,
    delete_status: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    created_at: { // timestamps가 false라서 created_at 직접 작성
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    }
  }, {
    sequelize,
    underscored: true, // camelCase => snake_case true
    freezeTableName: true, // 원하는 테이블 명 true
    timestamps: false, // createdAt, updatedAt 자동 생성 false
    modelName: "comment", // 모델 이름
    tableName: "Comment" // 테이블 명
  });
  return comment;
};