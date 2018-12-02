import { getLetterMatchCount } from "../helpers/index";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD"
};

export const guessWord = word => (dispatch, getState) => {
  const secret = getState().secret;
  const match = getLetterMatchCount(word, secret);

  dispatch({ payload: { word, match }, type: actionTypes.GUESS_WORD });

  if (word === secret) {
    dispatch({ type: actionTypes.CORRECT_GUESS });
  }
};
