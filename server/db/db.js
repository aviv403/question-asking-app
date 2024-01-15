const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.QA_APP_DB_HOST,
  user: process.env.QA_APP_DB_USER,
  database: process.env.QA_APP_DB_NAME,
  password: process.env.QA_APP_DB_PASSWORD,
  waitForConnections: true,
});

module.exports = pool.promise();
