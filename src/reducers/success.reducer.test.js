import { actionTypes } from "../actions";
import successReducer from "./successReducer";

describe("Success Reducer", () => {
  test("Do not change the state if no action is passed", () => {
    const newState = successReducer(undefined, {});

    expect(newState).toBe(false);
  });

  test("Change the state to true if action CORRECT_GUESS is passed", () => {
    const newState = successReducer(undefined, {
      type: actionTypes.CORRECT_GUESS
    });

    expect(newState).toBe(true);
  });
});
