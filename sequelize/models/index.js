const env = process.env.NODE_ENV || 'development';
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config.json')[env];

const sequelize = new Sequelize(config.uri, {
  logging(message) {
    logger.silly(message);
  },
  define: {
    timestamps: false,
    freezeTableName: true,
  },
});

const Models = [
  'Gamer',
];

Models.forEach((modelName) => {
  // eslint-disable-next-line dot-notation
  const model = sequelize['import'](path.join(__dirname, modelName));

  global[model.name] = model;
});

module.exports = sequelize;
