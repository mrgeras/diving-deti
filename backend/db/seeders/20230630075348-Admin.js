const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Admins',
      [
        {
          login: 'admin',
          password: await bcrypt.hash('123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },



  
  async down(queryInterface) {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
