import React, { Component } from "react";
import "./Form.css";
import axios from "axios";
import { BASE_URL } from "../constants";

export default class AddQuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      authorName: "",
      email: "",
      lecturerId: 1,
      success: false
    };
  }

  handleUserInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.showInputError(e.target.name);
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log("state", JSON.stringify(this.state));
    console.log("props", JSON.stringify(this.props));

    if (!this.showFormErrors()) {
      this.setState({ success: false });
    } else {
      this.setState({ success: true });

      this.clearInputs();
      axios.post(BASE_URL+'/event/addQuestion', {
          QuestionContent: this.state.question,
          AuthorName: this.state.authorName,
          Email: this.state.email,
          EventId: this.props.eventId,
          LecturerId: this.state.lecturerId,
        });
    }
  };

  showFormErrors = () => {
    const textarea = document.getElementsByName("question");
    let isFormValid = true;

    const isQuestionValid = this.showInputError("question");
    if(!isQuestionValid){
      isFormValid = false;
      textarea[0].classList.add("invalid");
    }
    else{
      textarea[0].classList.remove("invalid");
      textarea[0].classList.add("valid");
    }

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
    return (
      <div className="containter">
        <form noValidate>
          <div className="row">
            <div className="form-group col-md-6">
              <label id="questionLabel">
                Question<span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                className="form-control"
                rows="5"
                type="text"
                name="question"
                ref="question"
                onChange={this.handleUserInput}
                onBlur={this.showFormErrors}
                required
              />
              <div className="error" id="questionError" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">Optional:</div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label id="authorNameLabel">Name</label>
              <input
                className="form-control"
                type="text"
                name="authorName"
                ref="authorName"
                value={this.state.authorName}
                onChange={this.handleUserInput}
              />
            </div>
            <div className="col-md-3">
              <label id="emailLabel">Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                ref="email"
                value={this.state.email}
                onChange={this.handleUserInput}
                pattern="/^(([^<>()\[\]\\.,;:\s@&quot;]+(\.[^<>()\[\]\\.,;:\s@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"
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
      </div>
    );
  }
}
