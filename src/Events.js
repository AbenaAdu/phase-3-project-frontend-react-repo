import React from 'react';

function Events({event}){

    return(
        <div className="events">
            <p>{event.name}</p>
            <p>{event.date}</p>
            <p>{event.type_of_event}</p>  
        </div>
    )

}

export default Events;