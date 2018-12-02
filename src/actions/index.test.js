import { actionTypes, correctGuess } from "./index";

describe("Correct Guess", () => {
  test("returns an action with type 'CORRECT_GUESS'", () => {
    const action = correctGuess();

    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
