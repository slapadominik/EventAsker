import React, { Component } from "react";
import { login } from "../actions/userAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Form.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
    this.props
      .login(this.state)
      .then(response => this.context.router.history.push("/"));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate>
          <div className="form-group col-md-3">
            <label>Username:</label>
            <input
              className="form-control"
              type="text"
              value={this.state.username}
              onChange={this.handleChangeUsername}
              required
            />
          </div>
          <div className="form-group col-md-3">
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
              required
            />
          </div>
          <div className="col-md-2">
          <button className="btn btn-primary" onClick={this.handleSubmit}>
          Login
          </button>
          </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
};
export default connect(null, { login })(LoginForm);
