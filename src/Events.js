import React from 'react';

function Events({event}){

    return(
        <div className="events">
            <p>Event Name: {event.name}</p>
            <p>Event Date: {event.date}</p>
            <p>Event Type: {event.type_of_event}</p>  
        </div>
    )

}

export default Events;