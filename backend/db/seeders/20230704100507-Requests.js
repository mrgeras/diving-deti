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
          userName: 'Оксана',
          tel: '+79243746534',
          email: 'oks@mail.ru',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 2,
          requestStatus: true,
          userName: 'Карина',
          tel: '+79284630286',
          email: 'karina@mail.ru',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 3,
          requestStatus: false,
          userName: 'Роман',
          tel: '+79264509384',
          email: 'roman@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 4,
          requestStatus: true,
          userName: 'Александр',
          tel: '+79117264503',
          email: 'sanya@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 5,
          requestStatus: false,
          userName: 'Екатерина',
          tel: '+7923456342',
          email: 'katusha@mail.ru',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 1,
          requestStatus: true,
          userName: 'Анатолий',
          tel: '+79123412875',
          email: 'dyadyatolik@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 2,
          requestStatus: false,
          userName: 'Дмитрий',
          tel: '+79552418768',
          email: 'dimooon@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 3,
          requestStatus: true,
          userName: 'Владислав',
          tel: '+79127866538',
          email: 'vladik_business@gmail.com',
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
