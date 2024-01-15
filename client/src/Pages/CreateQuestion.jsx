import { useCallback, useState } from "react";
import Answer from "../components/Answer";
import { createQuestion } from "../helper/fetch";
import Loader from "../components/Loader";
import QuestionTypes from "../components/QuestionTypes";

export default function CreateQuestion() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [radioValue, setRadioValue] = useState("poll");
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [successMsg, setSuccessMsg] = useState("");

  const handleAddClick = () => {
    if (text) {
      setAnswers((prv) => [...prv, text]);
      setText("");
    }
  };

  const handleCreateClick = async (e) => {
    e.preventDefault();
    const data = {
      text: question,
      answers: answers,
      type: radioValue,
      correctAnswer: answers[correctAnswerIndex],
    };
    setSuccessMsg("");
    setLoading(true);
    await createQuestion(data, setLoading);
    setLoading(false);
    setSuccessMsg("Question created successefuly!");
  };

  const handleChangeSelection = useCallback((e) => {
    setRadioValue(e.target.value);
  }, []);

  return (
    <div className="create-question">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2>Create Question</h2>
          <div style={{ fontWeight: "bold" }}>
            Question:
            <input
              type="text"
              value={question}
              placeholder="Type a question..."
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          <QuestionTypes
            radioValue={radioValue}
            handleChangeSelection={handleChangeSelection}
          />
          {radioValue === "trivia" && <p>***Click on the correct answer</p>}
          <div>
            <div className="answers">
              <label style={{ fontWeight: "bold" }}>Answers:</label>
              {answers.map((answer, idx) => (
                <Answer
                  key={idx}
                  text={answer}
                  id={idx}
                  isTrivia={radioValue === "trivia"}
                  correctAnswerIndex={correctAnswerIndex}
                  setCorrectAnswerIndex={setCorrectAnswerIndex}
                />
              ))}
              <div>
                <input
                  placeholder="Type an answer..."
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleAddClick}>Add</button>
              </div>
            </div>
          </div>

          <button style={{ textAlign: "center" }} onClick={handleCreateClick}>
            Create
          </button>
          <div>{successMsg}</div>
        </>
      )}
    </div>
  );
}
