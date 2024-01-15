  // *** Handling Concurrency issues ***
  // Using transactions to ensure the consistency
  // and isolation of the updates, which helps avoid conflicts.

const db = require("./db");

function getConnectionFromPool() {
  return db.getConnection();
}

function beginTransaction(connection) {
  return connection.beginTransaction();
}

function executeQuery(connection, sqlQuery, values) {
  return connection.execute(sqlQuery, values);
}

function commitTransaction(connection) {
  return connection.commit();
}

function rollbackTransaction(connection) {
  return connection.rollback();
}

function releaseConnectionToPool(connection) {
  connection.release();
}

module.exports = {
  getConnectionFromPool,
  beginTransaction,
  executeQuery,
  commitTransaction,
  rollbackTransaction,
  releaseConnectionToPool,
};
