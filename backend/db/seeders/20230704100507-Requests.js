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
          email: 'По телефону',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 2,
          requestStatus: true,
          userName: 'Карина',
          tel: '+79284630286',
          email: 'WhatsApp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 3,
          requestStatus: false,
          userName: 'Роман',
          tel: '+79264509384',
          email: 'Telegram',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 4,
          requestStatus: true,
          userName: 'Александр',
          tel: '+79117264503',
          email: 'По телефону',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 5,
          requestStatus: false,
          userName: 'Екатерина',
          tel: '+7923456342',
          email: 'WhatsApp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 6,
          requestStatus: true,
          userName: 'Анатолий',
          tel: '+79123412875',
          email: 'Telegram',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 7,
          requestStatus: false,
          userName: 'Дмитрий',
          tel: '+79552418768',
          email: 'По телефону',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseId: 8,
          userName: 'Владислав',
          tel: '+79127866538',
          email: 'WhatsApp',
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
