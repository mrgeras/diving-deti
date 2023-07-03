'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Courses',
      [
        {
          courseName: 'Группа раннего плавания',
          courseImg:
            'https://diving-deti.ru/wp-content/uploads/2017/12/rannee-plavanie-1.jpg',
          description:
            'Когда можно отдать ребенка на раннее плавание и справится ли мой малыш?',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseName: 'Обучение фридайвингу',
          courseImg:
            'https://diving-deti.ru/wp-content/uploads/2017/12/fridayving.jpg',
          description:
            'Фридайвинг — погружение под воду на задержке дыхания (апноэ). Одна из ранних форм подводного плавания. Мы в нашей школе плавания в Санкт-Петербурге решили дать подробную информацию об этой дисциплине.',
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
