import React, { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const value = parseInt(event.target.value, 10); // Parse value as an integer
    setNumber(value);

    if (isNaN(value) || value <= 0) {
      setErrorAlert("Enter a valid number greater than 0");
    } else if (value > 32) {
      setErrorAlert("Only a maximum of 32 events is allowed");
    } else {
      setErrorAlert(""); // Clear the error message
      setCurrentNOE(value); // Update the number of events in the parent component
    }
  };

  return (
    <div id="number-of-events">
      <label>
        Number of Events:
        <input
          type="number" 
          value={number}
          onChange={handleInputChanged}
          data-testid="numberOfEventsInput"
          min="1" 
          max="32" 
        />
      </label>
    </div>
  );
};

export default NumberOfEvents;
