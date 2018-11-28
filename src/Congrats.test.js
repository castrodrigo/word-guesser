import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr, checkProps } from "../test/testUtils";

import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  success: false
};

const setupComponent = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("Render without errors", () => {
  const wrapper = setupComponent();
  const component = findByTestAttr(wrapper, "component-congrats");

  expect(component.length).toBe(1);
});

test("Should show Congrats if correct", () => {
  const wrapper = setupComponent({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");

  expect(message.text().length).not.toBe(0);
});

test("Should not show Congrats with a empty message", () => {
  const wrapper = setupComponent({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");

  expect(component.text()).toBe("");
});

test("Does not throw a warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
