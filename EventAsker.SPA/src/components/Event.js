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
        return fetch('http://localhost:51743/api/Event/DeleteEvent?eventId='+this.props.eventId, {
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
                    <div>
                    <h5>{this.props.eventName} </h5> 
                    <h6>{this.props.eventCity}</h6>
                    <h6>{this.props.eventDate}</h6>

                    <button class="btn btn-alert-primary" >
                        DESCRIPTION
                    </button>
                    </div>
                    
                <div align="right">
                    <button class="btn btn-danger" onClick={this.deleteEvent}>
                        Delete
                    </button>
                </div>
                

                    <div class="card-body">
                        <h6>Street:</h6> <p>{this.props.eventStreet}</p>
                        <h6>Description: </h6> <p>{this.props.eventDescription}</p>
                    </div>
                </div>
        );
    }
}