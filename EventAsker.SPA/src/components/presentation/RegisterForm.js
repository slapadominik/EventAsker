import React, { Component } from "react";
import { BASE_URL } from "../../constants";
import "../../styles/Form.css";
import axios from "axios";
import PropTypes from "prop-types";

class RegisterForm extends Component {
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

    axios.post(BASE_URL + "/auth/register", {
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      this.context.router.history.push("/")
    })
    .catch(error => {
      console.log(error);
      if(error.response.status === 401)
       {this.context.router.history.push("/unauthorized")}
    });
  };

  clearInputs() {
    this.setState({
      username: "",
      password: ""
    });
  }

  render() {
    return (
      <div className="form-center">
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="form-group col-md-offset-2">
            <label>
              Username<span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="form-control"
              type="text"
              value={this.state.username}
              onChange={this.handleChangeUsername}
            />
          </div>
          <div className="form-group col-md-offset-2">
            <label>
              Password<span style={{ color: "red" }}>*</span>
            </label>
            <input
              className="form-control"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <div className="col info">
          <span style={{ color: "red" }}>*</span> - field required
        </div>
          <div className="col-md-offset-2">
            <button
              id="sumbitBtn"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Register
            </button>
          </div>
          
          <h5>
            {this.state.success
              ? "Zarejestrowano użytkownika ".concat(this.state.usernameSuccess)
              : ""}
          </h5>
        </form>
      </div>
    );
  }
}

RegisterForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default RegisterForm;
