const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('career_navigator', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

const Employer = sequelize.define('Employer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.TEXT,
  requiredEducation: DataTypes.STRING,
  requiredCompetencies: DataTypes.TEXT,
  requiredExams: DataTypes.STRING,
});

module.exports = { sequelize, Employer };
