const { StatusCodes } = require("http-status-codes");
const Question = require("../models/Question");
const Answer = require("../models/Answer");

// Gets a question with all the answers associated with it
const getSingleQuestion = async (req, res) => {
  const id = req.params.id; // id = Question ID

  if (id) {
    const question = await Question.findByID(id);
    const answers = await Answer.findByQuestionID(id);

    if (question && answers) {
      const data = { question, answers };
      return res.status(StatusCodes.OK).json({ data });
    }
  }
  throw Error;
};

// Insert a question and answers
const createQuestion = async (req, res) => {
  const { text, answers, type, correctAnswer } = req.body;

  if (text && answers?.length >= 2 && Array.isArray(answers)) {
    // Create question and save in db (Question table)
    const question = new Question(text, type);
    await question.save();

    // Create answers and save in db (Answer table)
    answers.map(async (answerText) => {
      const isCorrect = type === "trivia" ? correctAnswer === answerText : null;
      const answer = new Answer(answerText, question.id, Number(isCorrect));
      await answer.save();
    });

    const data = { questionId: question.id };
    return res.status(StatusCodes.OK).json({ data });
  }

  throw Error;
};

module.exports = { getSingleQuestion, createQuestion };
