import React, { Component } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import "../index.css";
import "./Event.css";
import axios from "axios";
import { BASE_URL } from "../constants";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";

class Event extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      eventName: "Spotkanko",
      eventDescription: "januszowe",
      eventStreet: "poziomkowa",
      eventCity: "Wawa",
      eventDate: "21/11/1999",
      eventLectures: [],
      eventQustions: [],
      collapse: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  deleteEvent = () => {
    return axios
      .delete(BASE_URL + "/Event/DeleteEvent", {
        params: { eventId: this.props.eventId }
      })
      .then(window.location.reload());
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const deleteButton = (
      <button className="btn btn-danger" onClick={this.deleteEvent}>
        Delete
      </button>
    );

    return (
      <div className="row-flex card">
        <div>
          <h3>{this.props.eventName}</h3>
          <h6>{this.props.eventCity}</h6>
          <h6>{this.props.eventDate}</h6>
        </div>
        <div className="btn-group" role="group">
          <button className="btn btn-primary" onClick={this.toggle}>
            Description
          </button>
        <LinkButton to="/addQuestion">Ask Question</LinkButton>
          {isAuthenticated ? deleteButton : null}
        </div>

        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <div className="desc">
                <h6>Description: </h6>
                <p>{this.props.eventDescription}</p>
              </div>
              <h6>Street: </h6> <p>{this.props.eventStreet}</p>
              <h6>Lectures: </h6> <p>{this.props.eventLectures}</p>
              <h6>Questions: </h6> <p>{this.props.eventQustions}</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

Event.propTypes = {
  auth: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(Event);
