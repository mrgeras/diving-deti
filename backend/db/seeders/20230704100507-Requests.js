'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Requests',
      [
        {
          courseId: 1,
          requestStatus: false,
          userName: 'roman',
          tel: '+123',
          email: '123@qwe',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Requests', null, {});
  },
};
