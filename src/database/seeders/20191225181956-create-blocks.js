const faker = require("faker");

module.exports = {
  up: function(queryInterface, Sequelize) {
    var data = [];

    for (let i = 0; i < 10; i++) {
      const seedData = {
        name: faker.random.word(),
        created_at: new Date(),
        updated_at: new Date()
      };
      data.push(seedData);
    }

    return queryInterface.bulkInsert("blocks", data);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("blocks", null, {});
  }
};
