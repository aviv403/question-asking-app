import { useState } from "react";
import VoteResults from "../components/VoteResults";

export default function Vote() {
  const [qID, setQID] = useState("");
  const [data, setData] = useState(null);
  const [radioValue, setRadioValue] = useState(null);
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const [votes, setVotes] = useState(null);

  const fetchSingleQuestion = async () => {
    if (!qID) return;
    setVotes(null)
    setChosenAnswer(null)

    await fetch(`${import.meta.env.VITE_API_URI}/question/${qID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (resp) => await resp.json())
      .then((resp) => {
        if (resp?.data) {
          setData(resp.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleVoteClick = async () => {
    if (!chosenAnswer) return;

    const { id, q_id } = chosenAnswer;
    const data = { answerID: id, questionID: q_id };
    await fetchVote(data);
  };

  const fetchVote = async (data) => {
    await fetch(`${import.meta.env.VITE_API_URI}/answer/vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (resp) => await resp.json())
      .then((resp) => {
        if (resp.data) {
          setVotes(resp.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleRadioChange = (e, answer) => {
    setRadioValue(e.target.value);
    setChosenAnswer({ ...answer });
  };

  return (
    <div className="vote">
      <h2>Vote Page</h2>
      <input
        type="text"
        value={qID}
        onChange={(e) => setQID(e.target.value)}
        placeholder="Enter Question ID..."
      ></input>
      <button onClick={fetchSingleQuestion}>Fetch</button>
      {votes ? (
        <VoteResults results={votes} />
      ) : (
        <>
          {data && (
            <>
              <div className="question">{data.question.text}</div>
              {data.answers.map((answer) => (
                <div key={answer.id}>
                  <input
                    type="radio"
                    id={answer.text}
                    name={answer.text}
                    value={answer.text}
                    required
                    onChange={(e) => handleRadioChange(e, answer)}
                    checked={radioValue === answer.text}
                  />
                  <label htmlFor={answer.text}>{answer.text}</label>
                </div>
              ))}

              {radioValue && <button onClick={handleVoteClick}>Vote</button>}
            </>
          )}
        </>
      )}
    </div>
  );
}
