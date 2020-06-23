import React from "react";
import { mount } from "enzyme";
import App from "../components/App";

let wrapper;

beforeEach(() => {
  wrapper = mount(<App />);
});
it("shows the comment with exact content coming from textarea", () => {
  wrapper
    .find("textarea")
    .simulate("change", { target: { value: "Hello World" } });

  wrapper.update();

  wrapper.find("#submit").simulate("click");

  wrapper.update();

  expect(wrapper.find("li").text()).toEqual("Hello World");
});
