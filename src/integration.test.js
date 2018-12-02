import { storeFactory } from "../test/testUtils";
import { guessWord } from "./actions";
import { exec } from "child_process";
import GuessedWords from "./components/GuessedWords";

describe("Guess Word action dispatcher", () => {
  const secret = "party";
  const errorGuess = "train";

  describe("No guess words", () => {
    let store;
    const initialState = { secret };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("If update state correctly for unsuccessful guess", () => {
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            word: errorGuess,
            match: 3
          }
        ]
      };

      store.dispatch(guessWord(errorGuess));

      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });

    test("If update state correctly for successful guess", () => {
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            word: secret,
            match: 5
          }
        ]
      };

      store.dispatch(guessWord(secret));

      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
  });

  describe("Some guess words", () => {
    let store;
    const guessedWords = [{ word: "agile", match: 1 }];
    const initialState = { secret, guessedWords };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("If update state correctly for unsuccessful guess", () => {
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            word: errorGuess,
            match: 3
          }
        ]
      };

      store.dispatch(guessWord(errorGuess));

      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });

    test("If update state correctly for successful guess", () => {
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            word: secret,
            match: 5
          }
        ]
      };

      store.dispatch(guessWord(secret));

      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
  });
});
