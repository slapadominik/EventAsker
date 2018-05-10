import React, { Component } from "react";
import { BASE_URL } from "../constants";
import "../styles/Form.css";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameErrors: [],
      passwordErrors: [],
      success: false,
      usernameSuccess: ""
    };
  }

  handleChangeUsername = e => {
    this.setState({ username: e.target.value });
  };

  handleChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
    this.makeRequest(BASE_URL + "/auth/register", {
      username: this.state.username,
      password: this.state.password
    }).then(response => this.handleResponse(response));
  };

  clearInputs() {
    this.setState({
      username: "",
      password: ""
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
    }).then(response => response.json());
  }

  handleResponse(model) {
    if (model.hasOwnProperty("adminUsername")) {
      this.setState({
        success: true,
        usernameSuccess: model.adminUsername,
        usernameErrors: [],
        passwordErrors: []
      });
    } else {
      if (
        model.hasOwnProperty("Username") &&
        model.hasOwnProperty("Password")
      ) {
        this.setState({
          usernameErrors: model.Username,
          passwordErrors: model.Password
        });
      } else if (model.hasOwnProperty("Username")) {
        this.setState({
          usernameErrors: model.Username,
          passwordErrors: []
        });
      } else {
        this.setState({
          usernameErrors: [],
          passwordErrors: model.Password
        });
      }
    }
  }

  render() {
    const usernameLi = this.state.usernameErrors.map((msg, i) => (
      <li key={i}>{msg}</li>
    ));
    const passwordLi = this.state.passwordErrors.map((msg, i) => (
      <li key={i}>{msg}</li>
    ));
    return (
      <div className="form-center">
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="form-group col-md-8">
          <label>Username<span style={{color: 'red'}}>*</span></label>
            <input
              className="form-control"
              type="text"
              value={this.state.username}
              onChange={this.handleChangeUsername}
            />
          <ul>{usernameLi}</ul>
        </div>
        <div className="form-group col-md-8">
          <label>Password<span style={{color: 'red'}}>*</span></label>
            <input
              className="form-control"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />          
          <ul>{passwordLi}</ul>
        </div>
        <div className="col-md-2">
          <button
            id="sumbitBtn"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Register
          </button>
        </div>
        <h5>
          {this.state.success ? "Zarejestrowano użytkownika ".concat(this.state.usernameSuccess) : ""}
        </h5>
      </form>
      </div>
    );
  }
}
