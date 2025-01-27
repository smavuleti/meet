
# Meet- Serverless Progressive Web Application (PWA) with React

## Objective
A serverless, progressive web application (PWA) using React and a test-driven development (TDD) approach. The application fetches upcoming events using the Google Calendar API.

---

## Context
Serverless architecture and PWAs are essential components of modern web development. This app combines the two, delivering benefits such as scalability, offline support, and cross-platform compatibility. The app utilizes TDD to ensure high-quality, maintainable code and features data visualization for enhanced user experience.

---

## Key Features
1. **Filter Events by City**
2. **Show/Hide Event Details**
3. **Specify Number of Events**
4. **Use the App When Offline**
5. **Add an App Shortcut to the Home Screen**
6. **Display Charts Visualizing Event Details**

---

## Technical Requirements
- React application using the TDD technique.
- Google Calendar API and OAuth2 authentication flow.
- Serverless functions (AWS Lambda preferred) for the authorization server.
- Hosted on GitHub.
- Cross-browser compatibility with Chrome, Firefox, Safari, Edge, Opera, and IE11.
- Responsive design for screen sizes from 1920px to 320px.
- Pass Lighthouse’s PWA checklist.
- Offline functionality via a service worker.
- Installable on desktop and mobile devices.
- Deployed on GitHub Pages.
- Alert system implemented using an OOP approach.
- Data visualization features.
- Test coverage rate >= 90%.
- Performance monitoring via an online tool.

---

## Project Features & Scenarios

### Feature 1: Filter Events by City
- **Scenario 1**: When user hasn’t searched for a city, show upcoming events from all cities.
- **Scenario 2**: User sees a list of suggestions when they search for a city.
- **Scenario 3**: User can select a city from the suggested list.

### Feature 2: Show/Hide Event Details
- **Scenario 1**: An event element is collapsed by default.
- **Scenario 2**: User can expand an event to see details.
- **Scenario 3**: User can collapse an event to hide details.

### Feature 3: Specify Number of Events
- **Scenario 1**: When user hasn’t specified a number, 32 events are shown by default.
- **Scenario 2**: User can change the number of events displayed.

### Feature 4: Use the App When Offline
- **Scenario 1**: Show cached data when there’s no internet connection.
- **Scenario 2**: Show error when user changes search settings (city, number of events).

### Feature 5: Add an App Shortcut to the Home Screen
- **Scenario 1**: User can install the app as a shortcut on their device's home screen.

### Feature 6: Display Charts Visualizing Event Details
- **Scenario 1**: Show a chart with the number of upcoming events in each city.

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run tests to ensure functionality:
   ```bash
   npm test
   ```

---

## Deployment

- Deploy the app to GitHub Pages using the following command:
  ```bash
  npm run deploy
  ```

---

## Technologies Used
- **React** for building the user interface.
- **AWS Lambda** for serverless functionality.
- **Google Calendar API** for fetching event data.
- **Bootstrap** for styling and responsive design.
- **Lighthouse** for PWA compliance.

---

## Testing

This application uses TDD. Run the following command to ensure test coverage:
```bash
npm test -- --coverage
```

---

## License
This project is licensed under the MIT License.
