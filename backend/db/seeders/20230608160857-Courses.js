'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Courses',
      [
        {
          course_name: 'Супер способность',
          course_img:
            'https://s6.stc.all.kpcdn.net/expert/wp-content/uploads/2021/12/glavnaya-1-960x540.jpg',
          description: 'Научим плавать с уточкой',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          course_name: 'Супер скорость',
          course_img:
            'https://media.istockphoto.com/id/1454681424/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%B1%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9-%D0%BC%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA-%D0%BF%D1%8B%D1%82%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D1%83%D0%BB%D1%8C%D1%82%D1%80%D0%B0-%D1%81%D0%BA%D0%BE%D1%80%D0%BE%D1%81%D1%82%D1%8C-%D0%BF%D0%BB%D0%B0%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BF%D0%BE%D0%B4-%D0%B2%D0%BE%D0%B4%D0%BE%D0%B9.jpg?s=170667a&w=0&k=20&c=YsEpuxgjJd9pzzgU9ADQRqIIBIA19B4_OWMTtmgVz68=',
          description: 'Научим плавать быстро',
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
