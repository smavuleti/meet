import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import mockData from '../mock-data';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('User does not type in the number-of-events field', ({ given, when, then }) => {
    let AppComponent;

    given('I am a user', () => {
      AppComponent = render(<App />);
    });

    when('I have not typed a number on the number-of-events field', () => {
      // No interaction needed as this scenario tests the default behavior
    });

    then('I should see a list of 32 events', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32); // Assuming the default value is 32
      });
    });
  });

  test('User types a number in the number-of-events field', ({ given, when, then }) => {
    let AppComponent;
    let AppDOM;
    let NumberOfEventsInput;

    given('I am a user', () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    when('I type a number on the number-of-events field', async () => {
      const user = userEvent.setup();
      NumberOfEventsInput = within(AppDOM).getByTestId('numberOfEventsInput');
      await user.clear(NumberOfEventsInput);
      await user.type(NumberOfEventsInput, '3'); // User types "3"
    });

    then('I should be able to see a list of events with the number I typed as the length', async () => {
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(3); // Verifying the length matches the typed value
      });
    });
  });
});
