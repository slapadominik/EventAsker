import React, { Component } from 'react';
import Event from './Event';

export default class ShowEvents extends Component { 
    constructor(){
        super();
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        this.getEvents('http://localhost:51743/api/Event/GetEvents');
    }

    
    getEvents(url){
        return fetch(url)
        .then(response => response.json())
        .then(data => 
            this.setState({
              events: data
              }))
    }

    renderEvents = () => {
        return(
            this.state.events.map(
                (event) => <Event eventName= {event.name} eventDescription= {event.description} />)
        );
    }

    render(){
        return(
            <div >
               <h2>EVENTY:</h2>
               <div>
                    {this.renderEvents()}
                </div>
            </div>
        )
    }
}