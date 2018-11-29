import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ words }) => {
  let contents = (
    <span data-test="component-guessed-instructions">
      Try to guess the secret word!
    </span>
  );
  if (words.length > 0) {
    contents = (
      <div>
        <h3>Guessed Words</h3>
        <table data-test="guessed-words">
          <thead>
            <td>Word</td>
            <td>Match</td>
          </thead>
          <tbody>
            {words.map(item => {
              return (
                <tr key={item.word} data-test="guessed-word">
                  <td>{item.word}</td>
                  <td>{item.match}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessedWords.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      match: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
