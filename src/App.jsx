import React, { useEffect, useState } from 'react'; 
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [errorAlert, setErrorAlert] = useState("");
  const [infoAlert, setInfoAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");


  useEffect(() => {
    if (navigator.onLine) {
      // set the warning alert message to an empty string ""
      setWarningAlert(""); 

    } else {
      // set the warning alert message to a non-empty string
      setWarningAlert("You are offline. The displayed data may not be up-to-date."); 

    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities"
      ? allEvents
      : allEvents.filter(event => event.location === currentCity);

    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

    // This function updates the info alert
    const handleInfoAlert = (message) => {
      setInfoAlert(message);
    };
  

  return (
    <div className="App">
      <div className="alerts-container">
       {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
       {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
       {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
     </div>
      <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity} 
        setInfoAlert={handleInfoAlert}
      />
             <NumberOfEvents 
        setErrorAlert={setErrorAlert}
        currentNOE={currentNOE}
        setCurrentNOE={setCurrentNOE}
      />
      <EventList 
        events={events} 
      />

    </div>
  );
}

export default App;
