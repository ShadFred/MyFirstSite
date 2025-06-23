const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Employer', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    requiredEducation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    requiredSkills: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'employers',
    timestamps: true
  });
};
