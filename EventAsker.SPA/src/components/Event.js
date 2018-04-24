import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import "../index.css";
import "./Event.css";
import axios from "axios";
import { BASE_URL } from "../constants";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import Question from "./Question";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "Spotkanko",
      eventDescription: "januszowe",
      eventStreet: "poziomkowa",
      eventCity: "Wawa",
      eventDate: "21/11/1999",
      eventLectures: [],
      eventQustions: [],
      collapse: false,
      questionCollapse: false
    };
  }

  mapQuestionsToListItems = () => {
    return this.props.eventQuestions.map(question => (
      <Question
        key={question.questionId}
        authorName={question.authorName}
        email={question.email}
        questionContent={question.questionContent}
      />
    ));
  };
  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  toggleQuestions = () => {
    this.setState({ questionCollapse: !this.state.questionCollapse });
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const deleteButton = (
      <React.Fragment>
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(this.props.eventId)}
        >
          Delete
        </button>
        <button className="btn btn-primary" onClick={this.toggleQuestions}>
          Questions
        </button>
      </React.Fragment>
    );
    const location = "/addQuestion/" + this.props.eventId;

    return (
      <div className="row-flex card">
        <div>
          <h3>{this.props.eventName}</h3>
          <h6>{this.props.eventCity}</h6>
          <h6>{this.props.eventDate}</h6>
        </div>
        <div className="btn-group-justified" align="right" role="group">
          <button className="btn btn-primary" onClick={this.toggle}>
            Description
          </button>
          <LinkButton to={location}>Ask Question</LinkButton>
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
            </CardBody>
          </Card>
        </Collapse>
        <Collapse isOpen={this.state.questionCollapse}>
          <Card>
            <CardBody>
              <h6>Questions: </h6>
              <div>{this.mapQuestionsToListItems()}</div>
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
