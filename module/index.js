const { Sequelize } = require('sequelize');
const config = require('../config').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: config.logging
});


const Employer = require('./Employer')(sequelize);
const University = require('./University')(sequelize);
const Applicant = require('./Applicant')(sequelize);


module.exports = {
  sequelize,
  Employer,
  University,
  Applicant
};
