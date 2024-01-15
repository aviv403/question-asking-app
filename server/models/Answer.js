const db = require("../db/db");
const {
  getConnectionFromPool,
  executeQuery,
  commitTransaction,
  rollbackTransaction,
  releaseConnectionToPool,
  beginTransaction,
} = require("../db/transaction");
const { v4: uuidv4 } = require("uuid");

class Answer {
  constructor(text, q_id, isCorrect) {
    this.text = text;
    this.id = uuidv4();
    this.isCorrect = isCorrect;
    this.q_id = q_id; // q_id = ID of a question to which the answer belongs.
  }

  // Save list of answers in db
  async save() {
    const sqlQuery = `INSERT INTO answer(id,text,q_id,isCorrect) VALUES('${this.id}','${this.text}','${this.q_id}','${this.isCorrect}')`;
    await db.execute(sqlQuery);
  }

  static async findByID(id) {
    const sqlQuery = `SELECT * FROM answer WHERE ID='${id}'`;
    const res = await db.execute(sqlQuery);
    return res?.[0]?.[0];
  }

  // Find all answers by question id
  static async findByQuestionID(q_id) {
    const sqlQuery = `SELECT * FROM answer WHERE Q_ID='${q_id}'`;
    const result = await db.execute(sqlQuery);
    return result?.[0];
  }

  // Increment votes by 1 - [NOTE :: Handling the posibility for concurrency issues]
  static async incrementVotes(id) {
    const connection = await getConnectionFromPool();

    try {
      await beginTransaction(connection);

      // Specify the row to update and increment the "votes" column by 1
      const sqlQuery = `UPDATE answer SET votes=votes+1 WHERE id='${id}'`;

      // Execute the SQL query with the specified parameters
      await executeQuery(connection, sqlQuery, [id]);

      // Commit the transaction if the update was successful
      await commitTransaction(connection);

    } catch (error) {
      console.error("Error updating votes:", error);

      // Rollback the transaction in case of an error
      await rollbackTransaction(connection);

      // Throw an error
      throw Error;
    } finally {
      // Release the connection after the transaction is complete
      releaseConnectionToPool(connection);
    }
  }
}

module.exports = Answer;
