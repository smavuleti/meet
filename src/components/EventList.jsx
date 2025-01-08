// src/components/EventList.js
import React from 'react';
import Event from './Event';

const EventList = ({events}) => {
  return (
    <ul id="event-list">
        {events ? 
        events.map(event => (
          // Using a unique identifier, such as 'event.id', for the key
          <Event key={event.id} event={event} />
        )) 
        : null}
    </ul>
  );
}


export default EventList;