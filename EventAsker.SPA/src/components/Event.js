import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import "../index.css";
import "./Event.css";
import axios from "axios";
import { BASE_URL, modalEnterEventPasswordToAskQuestion } from "../constants";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import Question from "./Question";
import Modal from 'react-modal';

const modalEnterEventPasswordToAskQuestionStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
  }
};

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
      eventQuestions: [],
      collapse: false,
      questionCollapse: false,
      modalIsOpen: false,
      password: "",
    };
  }

  handleSubmit = e => {
    console.log(this.props.eventId);
    console.log(this.state.password);
    axios.get(BASE_URL + "/event/checkeventpassword", { EventId: this.props.eventId, AudienceKey: this.state.password })
      .then(response => {
        console.log(response);
      })
  };

  handleChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false, password: "" });
  }

  showDescription = () => {
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
          <h6>{this.props.eventTime}</h6>
        </div>
        <div className="btn-group-justified" align="right" role="group">
          <button className="btn btn-primary" onClick={this.toggle}>
            Description
          </button>
          <button className="btn btn-success" onClick={this.openModal}>Ask Question</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={modalEnterEventPasswordToAskQuestionStyle}
            contentLabel="Event password"
          >
            <h2 ref={subtitle => this.subtitle}>{this.props.eventName}</h2>
            <dic className="form-group">
              <label for="password">Event password:</label>
              <input
                className="form-control"
                type="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
                required
              />
              <button onClick={this.closeModal} className="btn btn-danger col-2">Cancel</button>
              <button onClick={this.handleSubmit} className="btn btn-info">Confirm</button>
            </dic>
          </Modal>
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
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(Event);
