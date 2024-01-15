const db = require("../db/db");
const { v4: uuidv4 } = require("uuid");

class Question {
  constructor(text, type) {
    this.text = text;
    this.id = uuidv4();
    this.type = type || "poll"; // type equals 'poll' by default (also in db)
  }

  // Save new question in db
  async save() {
    const sqlQuery = `INSERT INTO question(id,text,type) VALUES('${this.id}','${this.text}','${this.type}')`;
    await db.execute(sqlQuery);
  }

  // Find question by id
  static async findByID(id) {
    const sqlQuery = `SELECT * FROM question WHERE ID='${id}'`;
    const result = await db.execute(sqlQuery);
    return result?.[0]?.[0];
  }
}

module.exports = Question;
