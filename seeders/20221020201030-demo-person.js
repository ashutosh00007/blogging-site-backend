"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //  * Add seed commands here.
    //  *
    //  * Example:
    await queryInterface.bulkInsert(
      "People",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "John@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ashutosh",
          lastName: "Khajuria",
          email: "ashutosh@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Merchants",
      [
        {
          name: "John",
          email: "John@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Tenants",
      [
        {
          name: "PROD",
          merchantId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
