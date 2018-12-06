import React from "react";
import { shallow } from "enzyme";
import { storeFactory } from "../../test/testUtils";
import App, { UnconnectedApp } from "./App";

const setupComponent = (initialState = {}, props) => {
  const store = storeFactory(initialState);
  return shallow(<App store={store} {...props} />).dive();
};

describe("App Redux Action Creators", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setupComponent();
  });
  test("If getSecretWord action creator is in props", () => {
    const getSecretWordProp = wrapper.instance().props.getSecretWord;

    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

describe("Unconnected App", () => {
  test("If getSecretWord runs on App Mount", () => {
    const getSecretWordMock = jest.fn();
    const props = {
      getSecretWord: getSecretWordMock,
      success: true,
      guessedWords: []
    };

    const wrapper = shallow(<UnconnectedApp {...props} />);

    wrapper.instance().componentDidMount();

    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
  });
});
