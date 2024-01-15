// eslint-disable-next-line react/prop-types
function QuestionTypes({ radioValue, handleChangeSelection }) {
  return (
    <div style={{ fontWeight: "bold", marginTop: "1rem" }}>
      <label>Type:</label>
      <div>
        <input
          type="radio"
          id="poll"
          name="questionType"
          value="poll"
          required
          onChange={handleChangeSelection}
          checked={radioValue === "poll"}
        />
        <label htmlFor="poll">Poll</label>

        <input
          type="radio"
          id="trivia"
          name="questionType"
          value="trivia"
          onChange={handleChangeSelection}
          checked={radioValue === "trivia"}
        />
        <label htmlFor="trivia">Trivia</label>
      </div>
    </div>
  );
}

export default QuestionTypes;
