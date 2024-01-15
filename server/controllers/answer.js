const { StatusCodes } = require("http-status-codes");
const Answer = require("../models/Answer");

const voteAnswer = async (req, res) => {
  const { questionID, answerID } = req.body; // answer_id = ID of an answer to be voted on

  if (answerID && questionID) {
    const answer = await Answer.findByID(answerID); // Checks if answer exists in db

    if (answer) {
      await Answer.incrementVotes(answerID);

      // Checks if the answer belongs to the question
      if (questionID === answer.q_id) {
        const answers = await Answer.findByQuestionID(questionID);

        if (answers) {
          let data;
          if (answers.some((a) => a.isCorrect)) {
            data = answers.map((a) => ({
              answer: a.text,
              votes: a.votes,
              isCorrect: Boolean(a.isCorrect),
            }));
          } else {
            data = answers.map((a) => ({ answer: a.text, votes: a.votes }));
          }
          return res.status(StatusCodes.OK).json({ data });
        }
      }
    }
  }
  throw Error;
};

module.exports = { voteAnswer };
