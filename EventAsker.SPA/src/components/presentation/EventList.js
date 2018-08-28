import React from "react";
import "../../styles/Index.css";
import Event from "./Event";

const EventList = ({events, onDeleteEvent}) => (
    <div className="container">
        <div className="events-group">
            <h2 className="txt-center">Wydarzenia</h2>
            {events.map(event => (<Event
                key={event.eventId}
                eventId={event.eventId}
                eventName={event.name}
                eventDescription={event.description}
                eventStreet={event.street}
                eventCity={event.city}
                eventDate={event.date.substr(0, event.date.indexOf('T'))}
                eventTime={event.date.split('T')[1].slice(0, -3)}
                eventLectures={event.lectures}
                eventQuestions={event.questions}
                onDeleteEvent={onDeleteEvent}
                imageFilename={event.imageFilename}/>))}
        </div>
    </div>
);

export default EventList;