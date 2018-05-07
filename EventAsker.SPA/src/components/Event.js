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
import { lecture } from '../actions/lecturesAction';
import { bindActionCreators } from 'redux';
import DeleteModal from "./DeleteModal"

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventDescription: "",
      eventStreet: "",
      eventCity: "",
      eventDate: "21/11/1999",
      eventLectures: props.eventLectures,
      eventQustions: [],
      collapse: false,
      questionCollapse: false,
      modal:false
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

  onClickAddQuestion = (e) => {
    const location = "/addQuestion/" + this.props.eventId;
    this.context.router.history.push(location);
    this.props.lecture(this.state.eventLectures);
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const deleteButton = (
      <React.Fragment>
        <DeleteModal eventId={this.props.eventId} isOpen={this.state.modal}/>
        <button className="btn btn-primary" onClick={this.toggleQuestions}>
          Questions
        </button>
      </React.Fragment>
    );

    return (
      <div className="row-flex card">
        <div>
          <h3>{this.props.eventName}</h3>
          <h6>{this.props.eventCity}</h6>
          <h6>{this.props.eventDate}</h6>
          <h6>{this.props.eventTime}</h6>
        </div>
        <div className="btn-group-justified" align="right" role="group">
          <button className="btn btn-primary" onClick={this.toggle}>
            Description
          </button>
          <button className="btn btn-success" onClick={this.onClickAddQuestion}>Add Question</button>
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

Event.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, dispatch => bindActionCreators({ lecture }, dispatch))(Event);
