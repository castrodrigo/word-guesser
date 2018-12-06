import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../test/testUtils";

import Input from "./input";

const setupComponent = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />).dive();
};

describe("Render", () => {
  describe("Word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        success: false
      };
      wrapper = setupComponent(initialState);
    });
    test("If it renders properly", () => {
      const component = findByTestAttr(wrapper, "component-input");

      expect(component.length).toBe(1);
    });
    test("If it renders input box", () => {
      const component = findByTestAttr(wrapper, "input-box");

      expect(component.length).toBe(1);
    });
    test("If it renders submit button", () => {
      const component = findByTestAttr(wrapper, "input-button");

      expect(component.length).toBe(1);
    });
  });
  describe("Word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        success: true
      };
      wrapper = setupComponent(initialState);
    });
    test("If it renders properly", () => {
      const component = findByTestAttr(wrapper, "component-input");

      expect(component.length).toBe(1);
    });
    test("If it not renders input box", () => {
      const component = findByTestAttr(wrapper, "input-box");

      expect(component.length).toBe(0);
    });
    test("If it not renders submit button", () => {
      const component = findByTestAttr(wrapper, "input-button");

      expect(component.length).toBe(0);
    });
  });
});

describe("Redux Props", () => {
  test("Has piece of state as a prop", () => {
    const success = true;
    const wrapper = setupComponent({ success });
    const succesProp = wrapper.instance().props.success;

    expect(succesProp).toBe(success);
  });

  test("Check if guessWord action creator is a prop", () => {
    const wrapper = setupComponent();
    const guessWordProp = wrapper.instance().props.guessWord;

    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
