'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Courses',
      [
        {
          course_name: 'Супер способность',
          course_img: 'https://s6.stc.all.kpcdn.net/expert/wp-content/uploads/2021/12/glavnaya-1-960x540.jpg',
          description: 'Научим плавать с уточкой',            
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
  },
};
