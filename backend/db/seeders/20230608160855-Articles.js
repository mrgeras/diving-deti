'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Articles',
      [
        {
          article_name: 'Статья 1',
          article_img:
            'https://diving-deti.ru/wp-content/uploads/2017/12/rannee-plavanie-1.jpg',
            article_text:
            'Статья 1 текст',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
            article_name: 'Статья 2',
            article_img:
              'https://diving-deti.ru/wp-content/uploads/2017/12/rannee-plavanie-1.jpg',
              article_text:
              'Статья 2 текст',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  },
};
