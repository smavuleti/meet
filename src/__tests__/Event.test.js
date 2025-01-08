import React from "react"; // Import React correctly
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import mockData from "../mock-data";

const event = mockData[0];

describe("<Event /> component", () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={event} />);
    });

    test("renders event title", () => {
        const eventTitle = EventComponent.queryByText(event.summary);
        expect(eventTitle).toBeInTheDocument();
    });

    test("renders event start time", () => {
        const eventTime = EventComponent.queryByText(event.created);
        expect(eventTime).toBeInTheDocument();
    });

    test("renders event location", () => {
        const eventLocation = EventComponent.queryByText(event.location);
        expect(eventLocation).toBeInTheDocument();
    });

    // Show Details button
    test("renders event details button", () => {
        const detailButton = EventComponent.queryByText("Show Details");
        expect(detailButton).toBeInTheDocument();
    });

    // Scenario 1
    test("event's details are hidden by default", () => {
        const eventDetails = EventComponent.container.querySelector(".eventDetails");
        expect(eventDetails).not.toBeInTheDocument();
    });

    // Scenario 2
    test('shows details after user clicks on "Show Details"', async () => {
        const user = userEvent.setup();

        const showDetailButton = EventComponent.queryByText("Show Details");
        await user.click(showDetailButton);

        const eventDetails = EventComponent.container.querySelector(".eventDetails");
        expect(eventDetails).toBeInTheDocument();
    });

    // Scenario 3
    test('hides details after user clicks on "Hide Details"', async () => {
        const user = userEvent.setup();

        // Expand the details
        const showDetailButton = EventComponent.queryByText("Show Details");
        await user.click(showDetailButton);

        // Collapse the details
        const hideDetailButton = EventComponent.queryByText("Hide Details");
        await user.click(hideDetailButton);

        const eventDetails = EventComponent.container.querySelector(".eventDetails");
        expect(eventDetails).not.toBeInTheDocument();
    });
});
