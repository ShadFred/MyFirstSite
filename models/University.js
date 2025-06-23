const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('University', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    universityName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    faculties: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Список факультетов или направлений (можно хранить как JSON-строку)'
    },
    entranceExams: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Вступительные экзамены (например, ЕГЭ)'
    },
    competencies: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: 'Компетенции, которые получают студенты'
    }
  }, {
    tableName: 'universities',
    timestamps: true
  });
};
