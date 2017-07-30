module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Gamer', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    score: {
      type: Sequelize.INTEGER,
      defualtValue: 1200,
      allowNull: false,
    },
  }),

  down: async queryInterface => queryInterface.dropTable('Gamer'),
};
