import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { getEvents } from '../api';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppComponent;

    given('the user opened the app', () => {
      AppComponent = render(<App />);
    });

    when('the list of events are rendered', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    then('event details should not show', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector('.eventDetails');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test('User can expand an event to see details.', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;

    given('the user is seeing the events rendered', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
    });

    when('the user clicks the show details button', async () => {
      const user = userEvent.setup();
      const showDetailsButton = EventComponent.queryByText('Show Details');
      expect(showDetailsButton).toBeInTheDocument();
      await user.click(showDetailsButton);
    });

    then('the event details should be shown', async () => {
      const eventDetails = EventComponent.container.querySelector('.eventDetails');
      expect(eventDetails).toBeInTheDocument();
    });
  });

  test('User can collapse an event to hide details.', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;

    given('the user has clicked the show details button', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);

      const user = userEvent.setup();
      const showDetailsButton = EventComponent.queryByText('Show Details');
      expect(showDetailsButton).toBeInTheDocument();
      await user.click(showDetailsButton);

      const eventDetails = EventComponent.container.querySelector('.eventDetails');
      expect(eventDetails).toBeInTheDocument();
    });

    when('the user clicks the hide details button', async () => {
      const user = userEvent.setup();
      const hideDetailsButton = EventComponent.queryByText('Hide Details');
      expect(hideDetailsButton).toBeInTheDocument();
      await user.click(hideDetailsButton);
    });

    then('the event details should be hidden', () => {
      const eventDetails = EventComponent.container.querySelector('.eventDetails');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
});
