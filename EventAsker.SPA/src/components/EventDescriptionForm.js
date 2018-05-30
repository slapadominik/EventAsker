import React, { Component } from "react";
import "react-dropdown/style.css";
import { BASE_URL } from "../constants";
import axios from "axios";

class EventDescriptionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventId: "",
            eventName: "",
            eventDescription: "",
            eventStreet: "",
            eventCity: "",
            eventDate: "21/11/1999",
            eventTime: "",
            eventLectures: null,
            eventQuestions: null,
            imageFileName: ""
        };
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        console.log(this.props.eventName)
        axios.get(BASE_URL + "/Event/" + this.props.match.params.id).then(response => {
            console.log(response.data);
            this.setState({
                eventId: response.data.eventId,
                eventName: response.data.name,
                eventDescription: response.data.description,
                eventStreet: response.data.street,
                eventCity: response.data.city,
                eventDate: this.getDate(response.data.date),
                eventTime: this.getTime(response.data.date),
                eventLectures: response.data.lectures,
                eventQuestions: response.data.questions,
                imageFileName: response.data.imageFilename,
            });
        });
        console.log(this.state.event);
    }

    getDate = (dateTimePickerText) => {
        return dateTimePickerText.substr(0, dateTimePickerText.indexOf('T'));
    }

    getTime = (dateTimePickerText) => {
        return dateTimePickerText.split('T')[1].slice(0, -3);
    }

    render() {
        return (
            <div class="jumbotron">
                <h1 class="display-4">{this.state.eventName}</h1>
                <p class="lead">{this.state.eventDescription}</p>
            </div>
        );
    }
}

export default EventDescriptionForm;
