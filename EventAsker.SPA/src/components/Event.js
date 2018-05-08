import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import "../index.css";
import "./Event.css";
import axios from "axios";
import { BASE_URL } from "../constants";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Question from "./Question";
import { lecture } from '../actions/lecturesAction';
import { bindActionCreators } from 'redux';
import DeleteModal from "./DeleteModal"
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
      eventName: "",
      eventDescription: "",
      eventStreet: "",
      eventCity: "",
      eventDate: "21/11/1999",
      eventLectures: props.eventLectures,
      eventQuestions: [],
      collapse: false,
      questionCollapse: false,
      modalIsOpen: false,
      password: "",
      isEnteredPasswordInvalid: false,
      modal:false
    };
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleSubmit = e => {
    axios.put(BASE_URL + "/event/checkeventpassword", { EventId: this.props.eventId, AudienceKey: this.state.password })
      .then(response => {
        if (response.status === 200) {
          window.location = "/addQuestion/" + this.props.eventId;
          return;
        }
      })
      .catch(() => {
        this.setState({ isEnteredPasswordInvalid: true });
      });
  }

  handleChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal = () => {
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false, password: "", isEnteredPasswordInvalid: false });
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
    const wrongPasswordText = (
      <React.Fragment>
        <div className="alert alert-danger">
          <strong>Access denied!</strong> Entered event password is invalid.
        </div>
      </React.Fragment>

    )


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
            <div className="form-group">
              <label htmlFor="password">Event password:</label>
              <input
                className="form-control"
                type="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
                required
              />
              <button onClick={this.closeModal} className="btn btn-danger col-2">Cancel</button>
              <button onClick={(event) => { this.handleSubmit() }} className="btn btn-info">Confirm</button>
              {this.state.isEnteredPasswordInvalid ? wrongPasswordText : null}
            </div>
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

Event.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, dispatch => bindActionCreators({ lecture }, dispatch))(Event);
