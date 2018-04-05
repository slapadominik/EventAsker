import React, { Component } from 'react';
import '../index.css';


export default class Header extends Component {
    
    constructor(){
        super();
        this.state = {
            eventName: 'Spotkanko',
            eventDescription: 'januszowe',
            eventStreet: 'poziomkowa',
            eventCity: 'Wawa',
            eventDate: '21/11/1999'

        }
    }
    
    deleteEvent = () =>
    {
        return fetch('http://localhost:51743/api/Event/DeleteEvent?Id='+this.props.eventId, {
            method: 'DELETE',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: {},
        }).then(window.location.reload())
    }

    render(){
        return(
<div class = "card">
      <span>
      <h5>
        {this.props.eventName} 
        </h5> 
        <h6>{this.props.eventDate} {this.props.eventId}</h6>
      <button class="btn btn-alert-primary">
           DESCRIPTION
      </button>
      <button class="btn btn-danger" onClick={this.deleteEvent}>
          Delete
      </button>
      </span> 

      <div class="card-body">
        Street: {this.props.eventStreet}
        Description: {this.props.eventDescription}
      </div>
</div>
        );
    }
}