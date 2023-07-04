const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Reviews',
      [
        {
          userName: "anna",
          reviewText: "tipoto",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "anna1",
          reviewText: "tipoto1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: "anna2",
          reviewText: "tipoto2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};