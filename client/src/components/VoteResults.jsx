/* eslint-disable react/prop-types */
export default function VoteResults({ results }) {
  return (
    <>
      {results.map((result) => (
        <div key={result.answer} style={{ marginBottom: "1rem" }}>
          <div>Answer: {result.answer} </div>
          <div>Votes: {result.votes}</div>
          {Object.prototype.hasOwnProperty.call(result, "isCorrect") && (
            <div>Correct? {result.isCorrect ? "YES" : "NO"}</div>
          )}
        </div>
      ))}
    </>
  );
}
