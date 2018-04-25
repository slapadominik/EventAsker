import React, { Component } from "react";
import "./Form.css";
import axios from "axios";
import { BASE_URL } from "../constants";
import PropTypes from "prop-types";

class AddEventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      date: "",
      street: "",
      audienceKey: "",
      city: "",
      success: false,
      nameSuccess: ""
    };
  }

  handleUserInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.showInputError(e.target.name);
  };

  handleSubmit = e => {
    const inputs = document.querySelectorAll("input");

    e.preventDefault();

    if (!this.showFormErrors()) {
      this.setState({ success: false });
    } else {
      this.setState({ success: true });
      this.setState({ nameSuccess: this.state.name });

      inputs.forEach(input => {
        input.classList.remove("active");
      });

      this.clearInputs();

      axios.post(BASE_URL + "/event/addevent", {
        name: this.state.name,
        description: this.state.description,
        date: this.state.date,
        city: this.state.city,
        street: this.state.street,
        audienceKey: this.state.audienceKey,
        cityId: this.state.cityId,
        isActive: true
      })
      .then(response => { 
        this.context.router.history.push("/events");
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
      city: "",
      audienceKey: ""
    });
  }

  render() {
    return (
      <form noValidate>
        <div className="form-group col-md-6">
          <label id="nameLabel">Name</label>
          <span style={{ color: "red" }}>*</span>
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
          <span style={{ color: "red" }}>*</span>
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
          <span style={{ color: "red" }}>*</span>
          <input
            className="form-control"
            type="datetime-local"
            name="date"
            ref="date"
            value={this.state.date}
            onChange={this.handleUserInput}
            required
          />
          <div className="error" id="dateError" />
        </div>
        <div className="form-group col-md-6">
          <label id="cityLabel">City</label>
          <span style={{ color: "red" }}>*</span>
          <input
            className="form-control"
            type="text"
            name="city"
            ref="city"
            value={this.state.city}
            onChange={this.handleUserInput}
            required
          />
          <div className="error" id="cityError" />
        </div>
        <div className="form-group col-md-6">
          <label id="streetLabel">Street</label>
          <span style={{ color: "red" }}>*</span>
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
          <span style={{ color: "red" }}>*</span>
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

AddEventForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default AddEventForm;
