import React, { Component } from 'react';
import Event from './Event';
import axios from 'axios';
import {BASE_URL} from '../constants';

export default class ShowEvents extends Component { 
    constructor(){
        super();
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        this.getEvents(BASE_URL+'/Event/GetEvents');
    }
    
    getEvents(url){
        return axios.get(url)
            .then(response => {
                this.setState({
                    events: response.data
                });
                }
            );
    }

    getEventsExceptEventWithSpecifedId = (id) => {
        return this.state.events.filter(event => event.eventId !== id);
    }

    deleteEvent = (id) => {
        return axios
          .delete(BASE_URL + "/Event/DeleteEvent", {
            params: { eventId: id }
          })
          .then(response => {
              this.setState({events: this.getEventsExceptEventWithSpecifedId(id)});
          });
      };

    renderEvents = () => {
        return(
            this.state.events.map((event) =>  
                                <Event 
                                 key={event.eventId} 
                                 eventId = {event.eventId} 
                                 eventName= {event.name} 
                                 eventDescription= {event.description} 
                                 eventStreet = {event.street} 
                                 eventCity ={event.city}
                                 eventDate = {event.date} 
                                 eventLectures = {event.lectures} 
                                 eventQuestions = {event.questions}
                                 onDelete = {this.deleteEvent}
                                />)
        );
    }

    render(){
        return(
            <div >
               <h2>EVENTS:</h2>
               <div >
                    {this.renderEvents()}
                </div>
            </div>
        )
    }
}