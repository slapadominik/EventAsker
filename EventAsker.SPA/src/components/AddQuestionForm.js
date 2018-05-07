import React, { Component } from "react";
import "./Form.css";
import axios from "axios";
import { BASE_URL } from "../constants";
import PropTypes from "prop-types";
import Notifications, { success } from 'react-notification-system-redux';
import {connect} from 'react-redux';
import Dropdown from 'react-dropdown';
import { lecture, lectureAction } from '../actions/lecturesAction';
import 'react-dropdown/style.css';


const notificationOpts = {
  title: 'Thank you for your question!',
  message: 'We hope that lecturer\'s answer will satisfy you.',
  position: 'tr',
  autoDismiss: 3,
};


const mapStateToProps = function(state) {
  return {
     notifications: state.notifications,
     lectures: state
  }
}


class AddQuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      authorName: "",
      email: "",
      lectureId: 3,
      success: false,
    };
  }

  componentDidMount(){
    console.log(this.props);
  }

  
  
  handleUserInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.showInputError(e.target.name);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.showFormErrors()) {
      this.setState({ success: false });
    } else {
      this.setState({ success: true });

      this.clearInputs();
      axios.post(BASE_URL+'/question/addQuestion', {
          QuestionContent: this.state.question,
          AuthorName: this.state.authorName,
          Email: this.state.email,
          EventId: this.props.match.params.id,
          LectureId: this.state.lectureId,
        })
        .then(response => {

          this.addNotification();
        })
    }
  };

  dispatchNotification = (fn, timeout) =>{
    setTimeout(() => {
      this.context.store.dispatch(fn(notificationOpts));
    }, timeout);
  }

  addNotification = ()=>{
    this.dispatchNotification(success, 250);
  }

  showFormErrors = () => {
    const textareas = document.getElementsByName("question");
    const inputs = document.getElementsByName("authorName");
    let isFormValid = true;

    inputs.forEach(input => {
      input.classList.add("active");

      const isInputValid = this.showInputError(input.name);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    textareas.forEach(textarea => {
      const isQuestionValid = this.showInputError("question");

      if(!isQuestionValid){
        isFormValid = false;
        textarea.classList.add("invalid");
      }
      else{
        textarea.classList.remove("invalid");
        textarea.classList.add("valid");
      }
    });

    return isFormValid;
  }

  clearInputs = () => {
    this.setState({
      question: "",
      authorName: "",
      email: "",
    });
    const textarea = document.getElementsByName("question");
    textarea[0].value = "";
  }

  showInputError = (refName) => {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      } else if (validity.patternMismatch) {
        error.textContent = `Wrong email format`;
      }
      return false;
    }

    error.textContent = "";
    return true;
  }

  render() {
    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two', className: 'myOptionClassName' } 
    ]
    const defaultOption = options[1]

    const {notifications} = this.props;
    return (
      <div className="containter">
        <form noValidate>
          <div className="row">
            <div className="form-group col-md-6">
            <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label id="questionLabel">
                Question
              </label>
              <span style={{ color: "red" }}>*</span>
              <textarea
                className="form-control"
                rows="5"
                type="text"
                name="question"
                ref="question"
                maxLength="150"
                onChange={this.handleUserInput}
                onBlur={this.handleUserInput}
                required
              />
              <div className="error" id="questionError" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label id="authorNameLabel">Name</label>
              <span style={{ color: "red" }}>*</span>
              <input
                className="form-control"
                type="text"
                name="authorName"
                ref="authorName"
                value={this.state.authorName}
                onChange={this.handleUserInput}
                required
              />
              <div className="error" id="authorNameError" />
            </div>
            <div className="col-md-3">
              <label id="emailLabel">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                ref="email"
                value={this.state.email}
                onChange={this.handleUserInput}
              />
              <div className="error" id="emailError" />
            </div>
          </div>
          <div className="row top-buffer">
            <div className="col-md-2">
              <button
                id="sumbitBtn"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Ask
              </button>             
            </div>
            <div className="note">
              <h6>
                {this.state.success
                  ? "Question added"
                  : ""}
              </h6>
            </div>
          </div>
        </form>    
        <Notifications notifications={notifications} />
      </div>
    );
  }
}


AddQuestionForm.contextTypes = {
  store: PropTypes.object
};

AddQuestionForm.propTypes = {
  notifications: PropTypes.array,
};

export default connect(mapStateToProps, null)(AddQuestionForm);
/*
*
*/
