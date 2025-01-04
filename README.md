# Meet Application

## Feature User Stories

### 1. Filter Events by City
As a user, I want to filter events by city so that I can find relevant events happening near me or in a specific location.

#### Scenarios:
- **When the user hasn’t searched for a city**  
  Given the user is viewing the events list,  
  When they have not entered a city in the search bar,  
  Then the application should display a list of upcoming events from all cities.

- **User should see a list of suggestions when they search for a city**  
  Given the user is typing a city name in the search bar,  
  When the user enters at least three characters,  
  Then the application should display a list of suggested cities that match the input,  
  And the suggestions should be based on the available event locations.

- **User can select a city from the suggested list**  
  Given the user has entered a city name in the search bar and suggestions are displayed,  
  When the user clicks on a city from the list of suggestions,  
  Then the application should display only the events happening in the selected city.

---

### 2. Show/Hide Event Details
As a user, I want to toggle the visibility of event details so that I can view more information when needed and hide it when it's not relevant.

#### Scenarios:
- **An event element is collapsed by default**  
  Given the user opens the meet application,  
  When the list of events is displayed,  
  Then each event element should be collapsed by default, showing only the event title and summary.

- **User can expand an event to see details**  
  Given an event element is collapsed,  
  When the user clicks on the event title or an associated expand button,  
  Then the event should expand to display its full details, including date, time, location, and description.

- **User can collapse an event to hide details**  
  Given the user has expanded an event to view details,  
  When the user clicks or taps on the event's "Hide Details" button (or designated area),  
  Then the event should collapse, hiding its full details and showing only the title and summary.

---

### 3. Specify Number of Events
As a user, I want to control how many events are displayed on the events list so that I can customize the view to my preference and better manage my schedule.

#### Scenarios:
- **Default Number of Events**  
  Given the user opens the events page for the first time,  
  When the user has not specified the number of events to display,  
  Then the application should display a default of 32 events.

- **User Changes Number of Events**  
  Given the user is on the events page,  
  When the user specifies a number (e.g., 10, 20, 50) in the event limit input field or dropdown,  
  Then the application updates the events list to display the specified number of events.

---

### 4. Use the App When Offline
As a user, I want to access previously viewed events and be informed about limitations when offline so that I can continue using the app even when there is no internet connection.

#### Scenarios:
- **Show Cached Data When There’s No Internet Connection**  
  Given the user has accessed event data while online,  
  When the user goes offline,  
  Then the app should display the cached data (previously viewed events) to the user,  
  And, the user should see a banner or message indicating they are offline (e.g., “You are offline. Showing cached data.”).

- **Show Error When User Changes Search Settings While Offline**  
  Given the user is offline,  
  When the user attempts to change search settings (e.g., selecting a different city or number of events),  
  Then the app should show an error message (e.g., “Unable to apply changes: You are offline.”),  
  And, the search settings should not be updated.

---

### 5. Add Meet App Shortcut to Home Screen
As a user, I want to add the meet application as a shortcut on my device's home screen so that I can quickly access the app without needing to open my browser.

#### Scenario:
- **User can install the meet app as a shortcut on their device home screen**  
  Given the user is accessing the meet application through a supported web browser (e.g., Chrome on Android, Safari on iOS),  
  When the user interacts with the "Add to Home Screen" feature, such as through a browser prompt or a visible "Install App" button on the app's interface,  
  Then the app prompts the user to confirm the installation.

---

### 6. Display Charts Visualizing Event Details
As a user, I want to view a chart displaying the number of upcoming events in each city so that I can easily compare event availability and decide where to join.

#### Scenario:
- **User can install the meet app as a shortcut on their device home screen**  
  Given the user is logged in and has access to the event information,  
  When the data for upcoming events is successfully loaded,  
  Then a chart is displayed, showing the number of upcoming events categorized by city.

