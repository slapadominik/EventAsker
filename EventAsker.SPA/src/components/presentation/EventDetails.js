import React, { Component } from 'react'
import queryString from 'query-string';
import {
    BASE_URL,
    BASE_STATIC_FILES
  } from "../../constants";
import axios from 'axios';
import "../../styles/Index.css";
import "../../styles/Event.css";

class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            street: "",
            date: "",
            description: "",
            city: "",
            eventId: parseInt(queryString.parse(this.props.location.search).eventId, 10),
            imageFilename: ""
        };

    }

    componentDidMount() {
        this.getEventById(BASE_URL + "/Event/GetEvent/" + this.state.eventId);
    }

    getEventById(url) {
        return axios.get(url).then(response => {
          this.setState({
            name: response.data.name,
            street: response.data.street,
            date: response.data.date,
            description: response.data.description,
            city: response.data.city,
            imageFilename: response.data.imageFilename
          });
        });
      }

    render(){
        const imageLocation = BASE_STATIC_FILES + this.state.imageFilename;

        return(
            <div className="container">
                <div className="page"></div>
                <h2 className="txt-center">{this.state.name}</h2>
                <div className="container-details">
                    <div className="row">
                    <div className="col-md-6">
                        <img src={imageLocation} alt="Event"/>
                    </div>
                    <div className="col-md-6">
                        <div>{this.state.street}</div>
                        <div>{this.state.date}</div>
                    </div>            
                    </div>
                            
                </div>
                
            </div>
        );
    }
}

export default EventDetails;