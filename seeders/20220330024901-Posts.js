'use strict';

const { join } = require("path");

module.exports = {
  async up (queryInterface, Sequelize) {
    const postId = await queryInterface.bulkInsert(
      "Posts",
      [
        {
          postTitle: "test1",
          postContent: "test1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postTitle: "test2",
          postContent: "test2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postTitle: "test3",
          postContent: "test3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["postId"] }
    );
    
    console.log('test', postId);
     
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          comment: "comment 1",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: postId,
        },
        {
          comment: "comment 2",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: postId,
        },
        {
          comment: "comment 3",
          createdAt: new Date(),
          updatedAt: new Date(),
          postId: postId,
        },
      ]
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Posts", null, {});
    await queryInterface.bulkDelete("Comments", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
