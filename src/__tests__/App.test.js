import { render, within, screen, waitFor } from '@testing-library/react';
import React from 'react';
import App from './../App';
import userEvent from '@testing-library/user-event';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
        // Render the App component and get the first child of the container
        AppDOM = render(<App />).container.firstChild;
    });
  
    test('renders list of events', () => {
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });
  
    test('renders CitySearch component', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });

    test('renders NumberOfEvents component', () => {
        expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
    });
  
    test('updates the number of events displayed when the user changes the number of events input', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
        const NumberOfEventsInput = within(NumberOfEventsDOM).queryByTestId('numberOfEventsInput');
        
        // Clear the input before typing
        await user.clear(NumberOfEventsInput);  
        await user.type(NumberOfEventsInput, '10');  // Change input to 10 events

        // Wait for the event list to update with new items
        const EventListDOM = AppDOM.querySelector('#event-list');
        
        await waitFor(() => {
            const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
            expect(allRenderedEventItems.length).toBe(10); // Assert that exactly 10 events are displayed
        });
    });
});
