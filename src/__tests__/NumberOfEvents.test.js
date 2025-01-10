import NumberOfEvents from "../components/NumberOfEvents";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("<NumberOfEvents /> Component", () => {
  let NumberOfEventsComponent;
  const mockSetCurrentNOE = jest.fn();
  const mockSetErrorAlert = jest.fn();

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents
        currentNOE={32}
        setCurrentNOE={mockSetCurrentNOE}
        setErrorAlert={mockSetErrorAlert}
      />
    );
  });

  test("component contains input textbox", () => {
    const input = NumberOfEventsComponent.queryByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });

  test("ensures the default value of textbox is 32", () => {
    const input = NumberOfEventsComponent.getByTestId("numberOfEventsInput");
    expect(input).toHaveValue(32); // Input value is initially a number
  });

  test("textbox value changes when user updates input", async () => {
    const input = NumberOfEventsComponent.getByTestId("numberOfEventsInput");
    const user = userEvent.setup();

    await user.clear(input); // Clear input first
    await user.type(input, "10"); // Enter new value

    expect(input).toHaveValue(10); // Input value is updated
    expect(mockSetCurrentNOE).toHaveBeenCalledWith(10); // Check parent function call
    expect(mockSetErrorAlert).toHaveBeenCalledWith(""); // No error for valid input
  });

  test("displays error for invalid input", async () => {
    const input = NumberOfEventsComponent.getByTestId("numberOfEventsInput");
    const user = userEvent.setup();

    await user.clear(input); // Clear input
    await user.type(input, "0"); // Enter invalid value

    expect(mockSetErrorAlert).toHaveBeenCalledWith(
      "Enter a valid number greater than 0"
    );
  });

  test("displays error for value greater than 32", async () => {
    const input = NumberOfEventsComponent.getByTestId("numberOfEventsInput");
    const user = userEvent.setup();

    await user.clear(input);
    await user.type(input, "33"); // Enter value above max

    expect(mockSetErrorAlert).toHaveBeenCalledWith(
      "Only a maximum of 32 events is allowed"
    );
  });
});
