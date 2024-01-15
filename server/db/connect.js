const db = require("./db");
const { getConnectionFromPool } = require("./transaction");

async function connectDB() {
  try {
    await getConnectionFromPool();
    return console.log("Connected to db...");
  } catch (error) {
    return console.log(error);
  }
}

module.exports = connectDB;
