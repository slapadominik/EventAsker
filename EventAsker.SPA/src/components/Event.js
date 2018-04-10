import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import '../index.css';
import "./Event.css";


export default class Header extends Component {
    
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            eventName: 'Spotkanko',
            eventDescription: 'januszowe',
            eventStreet: 'poziomkowa',
            eventCity: 'Wawa',
            eventDate: '21/11/1999',
            eventLectures: [],
            eventQustions: [],
            collapse: false
        }
    }
    
    toggle(){
        this.setState({collapse: !this.state.collapse});
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
                    <h3>{this.props.eventName}</h3> 
                    <h6>{this.props.eventCity}</h6>
                    <h6>{this.props.eventDate}</h6>
                </div>
                
                <div>   
                    <button class="btn btn-primary" onClick={this.toggle} style={{ marginBottom: '1rem' }} >
                        DESCRIPTION
                    </button>
                    <button class="btn btn-danger" onClick={this.deleteEvent}>
                        Delete
                    </button>
                </div>
                
                
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                        <h6>Street: </h6> <p>{this.props.eventStreet}</p>
                        <div class="desc">
                            <h6>Description: </h6> 
                            <p>{this.props.eventDescription}</p>
                        </div>
                        <h6>Lectures: </h6> <p>{this.props.eventLectures}</p>
                        <h6>Questions: </h6> <p>{this.props.eventQustions}</p>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}