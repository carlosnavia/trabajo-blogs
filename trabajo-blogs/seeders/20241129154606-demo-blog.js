'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs',[
      {
        tituolo:"carlos",
        descripcion:"lenguaje para creacion de backed en js",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
        {
        tituolo:"eduardo",
        descripcion:"lenguaje para creacion de backed en js",
        createdAt:new Date(),
        updatedAt:new Date(),
        }
    ],{}) // ,{} esperaa registros.
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blogs',null,{})
  }
};
