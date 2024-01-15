/* eslint-disable react/prop-types */
const Answer = ({
  text,
  id,
  isTrivia,
  correctAnswerIndex,
  setCorrectAnswerIndex,
}) => {
  return (
    <>
      <label
        onClick={() => setCorrectAnswerIndex(id)}
        style={{
          color: isTrivia && correctAnswerIndex === id ? "red" : "white",
        }}
      >
        Answer {id + 1}: {text}
      </label>
    </>
  );
};

export default Answer;
