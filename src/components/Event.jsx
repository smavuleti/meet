import React, { useState } from 'react'; // Correct import for React and hooks

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
//console.log("EVENT:", event);
    return (
        <li className="event">
            <div >
                <h2>{event.summary}</h2>
                <p>{event.location}</p>
                <p>{event.created}</p>
            </div>
            {showDetails ? (
                <div>
                    <p>{event.description}</p>
                </div>
            ) : null}
            <button 
                className="details-btn"
                onClick={() => setShowDetails(!showDetails)}
            >
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
        </li>
    );
};

export default Event;
