import React from "react";
import { shallow } from "enzyme";
import CommentBox from "../CommentBox";
import CommentsList from "../CommentsList";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CommentBox />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("rendering all children", () => {
  it("renders a heading: Enter a comment", () => {
    expect(wrapper.find("h2").text()).toEqual("Enter a comment");
  });
  it("renders textarea", () => {
    expect(wrapper.find("textarea").length).toEqual(1);
  });
  it("renders 2 buttons: a Submit button & a Fetch Comment button", () => {
    expect(wrapper.find("button").length).toEqual(2);
  });
  it("renders a CommentsList component", () => {
    expect(wrapper.find(CommentsList).length).toEqual(1);
  });
});
