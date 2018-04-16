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
                console.log(response);
                this.setState({
                    events: response.data
                });
                }
            );
            
    }

    renderEvents = () => {
        return(
            this.state.events.map(
                (event) => <Event eventId = {event.eventId} eventName= {event.name} eventDescription= {event.description} eventStreet = {event.street} eventCity ={event.city} eventDate = {event.date} eventLectures = {event.lectures} eventQuestions = {event.questions}/>)
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