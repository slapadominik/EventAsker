import React, { Component } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import EventList from "../presentation/EventList";

export default class EventListContainer extends Component {
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
      this.setState({
        events: response.data
      });
    });
  }

  getEventsExceptEventWithSpecifedId = id => {
    return this.state.events.filter(event => event.eventId !== id);
  };

  onDeleteEvent = id => {
    return axios
      .delete(BASE_URL + "/Event/DeleteEvent", {
        params: { eventId: id }
      })
      .then(response => {
        this.setState({ events: this.getEventsExceptEventWithSpecifedId(id) });
      })
      .catch(err => {
        if (err.response.status===401){
          this.context.router.history.push('/unauthorized');
        }
      })
  };

  render() {
    return (
      <div>
         <EventList events={this.state.events} onDeleteEvent={this.onDeleteEvent}/>
      </div>
    );
  }
}
