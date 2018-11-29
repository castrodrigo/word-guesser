import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ words }) => {
  let contents;
  if (words.length === 0) {
    contents = (
      <span data-test="component-guessed-instructions">
        Try to guess the secret word!
      </span>
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
