import React from "react";
import HomePage from "./index";
import { render, screen } from "@testing-library/react";

test("renders something", () => {
  render(<HomePage name="akram" />);
  screen.getByText("Akram's CV");
});
