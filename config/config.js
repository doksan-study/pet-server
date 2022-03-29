const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    // port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "database_test",
    host: "127.0.0.1",
    // port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "database_production",
    host: "127.0.0.1",
    // port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false
  }
}