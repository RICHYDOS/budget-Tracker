'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createDatabase('budget_tracker');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
    await queryInterface.dropDatabase('budget_tracker');
  }
};