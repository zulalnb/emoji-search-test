import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });

describe("Emoji Search Tests", () => {
  let emojiList, input;

  beforeEach(() => {
    render(<App />);

    emojiList = screen.getAllByText("Click to copy emoji");
    input = screen.getByPlaceholderText(/Search Emoji/i);
  });

  test("renders header component", () => {
    const title = screen.getByText(/Emoji Search/i);
    expect(title).toBeInTheDocument();
  });

  test("emoji list initialized", () => {
    expect(emojiList.length).toEqual(20);
  });

  test("renders emoji", () => {
    userEvent.type(input, "Yum");
    expect(input).toBeInTheDocument();
  });

  test("clicked to copy emoji", () => {
    userEvent.click(emojiList[0].parentElement);
  });
});
