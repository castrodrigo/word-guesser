import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";

import GuessedWords from "./GuessedWords";

const defaultProps = {
  words: [
    {
      word: "train",
      match: 3
    }
  ]
};

const setupComponent = props => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("Does not throw a warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("If are not words Guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setupComponent({ words: [] });
  });

  test("Renders with no error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");

    expect(component.length).toBe(1);
  });

  test("If instruction are loaded", () => {
    const component = findByTestAttr(wrapper, "component-guessed-instructions");

    expect(component.length).not.toBe(0);
  });
});
describe("If are words Guessed", () => {
  const words = [
    {
      word: "train",
      match: 3
    },
    {
      word: "agile",
      match: 1
    },
    {
      word: "party",
      match: 5
    }
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = setupComponent({ words });
  });

  test("Renders with no error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");

    expect(component.length).toBe(1);
  });

  test("Renders guessed words", () => {
    const component = findByTestAttr(wrapper, "guessed-words");

    expect(component.length).toBe(1);
  });

  test("If shows the correct number of guessed words", () => {
    const component = findByTestAttr(wrapper, "guessed-word");

    expect(component.length).toBe(words.length);
  });
});
