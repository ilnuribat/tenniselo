module.exports = (sequelize, DataTypes) => sequelize.define('Gamer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    defualtValue: 1200,
    allowNull: false,
  },
});
