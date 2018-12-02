import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../test/testUtils";

import Input from "./input";

const setupComponent = (initialState = {}) => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />).dive();
};

setupComponent();

describe("Render", () => {
  describe("Word has not been guessed", () => {
    test("If it renders properly", () => {});
    test("If it renders input box", () => {});
    test("If it renders submit button", () => {});
  });
  describe("Word has been guessed", () => {
    test("If it renders properly", () => {});
    test("If it not renders input box", () => {});
    test("If it not renders submit button", () => {});
  });
});

describe("Update State", () => {});
