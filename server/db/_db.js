const Sequelize = require('sequelize');
require("dotenv").config();
const config = {
  logging: false,
}
 if(process.env.LOGGING){
  delete config.logging;
 }


const db = new Sequelize(process.env.DATABASE_URL ||'postgres://localhost:5432/grace_cinema', config);

module.exports = db;
