export const getLetterMatchCount = (guessed, secret) => {
  const secretSet = new Set(secret.split(""));
  const guessedSet = new Set(guessed.split(""));

  return [...secretSet].filter(letter => guessedSet.has(letter)).length;
};
