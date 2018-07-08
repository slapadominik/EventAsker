import React, { Component } from "react";
import Event from "./Event";
import axios from "axios";
import { BASE_URL } from "../constants";
import "../styles/Index.css";

export default class ShowEvents extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.getEvents(BASE_URL + "/Event/GetEvents");
  }

  getEvents(url) {
    return axios.get(url).then(response => {
        console.log(response);
      this.setState({
        events: response.data
      });
    });
  }

  getEventsExceptEventWithSpecifedId = id => {
    return this.state.events.filter(event => event.eventId !== id);
  };

  deleteEvent = id => {
    return axios
      .delete(BASE_URL + "/Event/DeleteEvent", {
        params: { eventId: id }
      })
      .then(response => {
        this.setState({ events: this.getEventsExceptEventWithSpecifedId(id) });
      });
  };

  renderEvents = () => {
    return this.state.events.map(event => (
      <Event
        key={event.eventId}
        eventId={event.eventId}
        eventName={event.name}
        eventDescription={event.description}
        eventStreet={event.street}
        eventCity={event.city}
        eventDate={this.getDate(event.date)}
        eventTime={this.getTime(event.date)}
        eventLectures={event.lectures}
        eventQuestions={event.questions}
        onDelete={this.deleteEvent}
        imageFilename={event.imageFilename}
      />
    ));
  };

  getDate = (dateTimePickerText) => {
      return dateTimePickerText.substr(0, dateTimePickerText.indexOf('T'));
  }

  getTime = (dateTimePickerText) => {
      return dateTimePickerText.split('T')[1].slice(0, -3);
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="events-group">
            <h2 className="txt-center">Events</h2>
            <div>{this.renderEvents()}</div>
          </div>
        </div>
      </div>
    );
  }
}
