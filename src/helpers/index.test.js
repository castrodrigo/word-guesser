import { getLetterMatchCount } from "./";

describe("Helpers", () => {
  const secretWord = "party";
  test("That returns the correct count when are no matching letters", () => {
    const match = getLetterMatchCount("bones", secretWord);
    expect(match).toBe(0);
  });
  test("That returns the correct count when are 3 matching letters", () => {
    const match = getLetterMatchCount("train", secretWord);
    expect(match).toBe(3);
  });
  test("That returns the correct count when there are duplicate letters", () => {
    const match = getLetterMatchCount("parka", secretWord);
    expect(match).toBe(3);
  });
});
