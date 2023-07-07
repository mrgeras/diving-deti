'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Articles',
      [
        {
          articleName: 'Статья 1',
          articleImg:
            'https://diving-deti.ru/wp-content/uploads/2017/12/rannee-plavanie-1.jpg',
          articleText: 'Статья 1 текст',
          articleText2: 'Основной текст',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleName: 'Статья 2',
          articleImg:
            'https://diving-deti.ru/wp-content/uploads/2017/12/rannee-plavanie-1.jpg',
          articleText: 'Статья 2 текст',
          articleText2: 'Основной текст',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleName: 'Статья 3',
          articleImg:
            'https://diving-deti.ru/wp-content/uploads/2017/12/rannee-plavanie-1.jpg',
          articleText: 'Статья 3 текст',
          articleText2: 'Основной текст',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleName: 'Статья 4',
          articleImg:
            'https://diving-deti.ru/wp-content/uploads/2017/12/rannee-plavanie-1.jpg',
          articleText: 'Статья 4 текст',
          articleText2: 'Основной текст',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleName: 'Статья 5',
          articleImg:
            'https://diving-deti.ru/wp-content/uploads/2017/12/rannee-plavanie-1.jpg',
          articleText: 'Статья 5 текст',
          articleText2: 'Основной текст',
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
