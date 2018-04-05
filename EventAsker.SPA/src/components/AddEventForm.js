import React, { Component } from "react";
import "./AddEventForm.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      date: "",
      street: "",
      audienceKey: "",
      cityId: 1,
      success: false,
      nameSuccess: ""
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.showInputError(e.target.name);
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log("state", JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      this.setState({ success: false });
    } else {
      this.setState({ success: true });
      this.setState({ nameSuccess: this.state.name });

      this.clearInputs();
      this.makeRequest("http://localhost:3372/api/event/addevent", {
        name: this.state.name,
        description: this.state.description,
        date: this.state.date,
        street: this.state.street,
        audienceKey: this.state.audienceKey,
        cityId: this.state.cityId
      });
    }
  };

  showFormErrors() {
    const inputs = document.querySelectorAll("input");
    let isFormValid = true;

    inputs.forEach(input => {
      input.classList.add("active");

      const isInputValid = this.showInputError(input.name);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`;
      } else if (validity.patternMismatch) {
        error.textContent = `Wrong date format, try: dd/MM/yyyy`;
      }
      return false;
    }

    error.textContent = "";
    return true;
  }

  clearInputs() {
    this.setState({
      name: "",
      description: "",
      date: "",
      street: "",
      audienceKey: ""
    });
  }

  makeRequest(url, opts) {
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(opts)
    });
  }

  render() {
    return (
      <form noValidate>
        <div className="form-group col-md-6">
          <label id="nameLabel">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            ref="name"
            value={this.state.name}
            onChange={this.handleUserInput}
            required
          />
          <div className="error" id="nameError" />
        </div>
        <div className="form-group col-md-6">
          <label id="descriptionLabel">Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            ref="description"
            value={this.state.description}
            onChange={this.handleUserInput}
            required
          />
          <div className="error" id="descriptionError" />
        </div>
        <div className="form-group col-md-6">
          <label id="dateLabel">Date</label>
          <input
            className="form-control"
            type="text"
            name="date"
            ref="date"
            value={this.state.date}
            onChange={this.handleUserInput}
            pattern="(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)"
            required
          />
          <div className="error" id="dateError" />
        </div>
        <div className="form-group col-md-6">
          <label id="streetLabel">Place</label>
          <input
            className="form-control"
            type="text"
            name="street"
            ref="street"
            value={this.state.street}
            onChange={this.handleUserInput}
            required
          />
          <div className="error" id="streetError" />
        </div>
        <div className="form-group col-md-6">
          <label id="audienceKeyLabel">Audience Key</label>
          <input
            className="form-control"
            type="text"
            name="audienceKey"
            ref="audienceKey"
            value={this.state.audienceKey}
            onChange={this.handleUserInput}
            required
          />
          <div className="error" id="audienceKeyError" />
        </div>
        <div className="col-md-2">
          <button
            id="sumbitBtn"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Add Event
          </button>
        </div>
        <div className="note">
          <h6>
            {this.state.success
              ? "Added Event ".concat(this.state.nameSuccess)
              : ""}
          </h6>
        </div>
      </form>
    );
  }
}
