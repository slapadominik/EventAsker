import React, { Component } from 'react';
import '../index.css';
import axios from 'axios'
import { BASE_URL } from '../constants';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Event extends Component {
    
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
        return axios.delete(BASE_URL+'/Event/DeleteEvent', { params: {eventId: this.props.eventId}}).then(window.location.reload());
    }

    render(){
        const { isAuthenticated } = this.props.auth;
        const deleteButton = (
            <button className="btn btn-danger" onClick={this.deleteEvent}>Delete</button>
        );
        return(
            <div className = "card">
                <span>
                    <h5>
                        {this.props.eventName} 
                    </h5> 
                    <h6>{this.props.eventDate} {this.props.eventId}</h6>
                     <button className="btn btn-alert-primary">DESCRIPTION</button>
                    {isAuthenticated ? deleteButton : null}
                </span> 

                <div className="card-body">
                    <div><b>Street</b>: {this.props.eventStreet}</div>
                    <div><b>Description</b>: {this.props.eventDescription}</div>
                </div>
            </div>
        );
    }
}

Event.propTypes = {
    auth: PropTypes.object.isRequired
}
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}
export default connect(mapStateToProps)(Event);