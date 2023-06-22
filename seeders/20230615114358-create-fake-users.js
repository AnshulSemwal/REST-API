'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('users', [{
       name: 'Divyansh Semwal',
       email: 'divsemwal@',
       uuid: 'ad56584e-3f57-456b-92c2-e97c402486d',
       role: 1,
       createdAt: "2023-06-15T11:19:01.357Z",
       updatedAt: "2023-06-15T11:19:01.357Z"
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
