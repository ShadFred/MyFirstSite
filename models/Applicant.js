const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Applicant', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    profileTestResults: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Результаты профориентационного теста (можно хранить в JSON формате)'
    }
  }, {
    tableName: 'applicants',
    timestamps: true
  });
};
