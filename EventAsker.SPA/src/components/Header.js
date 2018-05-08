import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { logout } from "../actions/userAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const adminLinks = (
      <React.Fragment>
        <li>
          <Link to="/addEvent">Add Event</Link>
        </li>
        <li>
          <a href="/" onClick={this.logout}>
            Logout
          </a>
        </li>
      </React.Fragment>
    );

    const guestLinks = (
      <React.Fragment>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </React.Fragment>
    );

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              EventAsker
            </Link>
          </div>
          <ul className="nav navbar-nav flex-row">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            {isAuthenticated ? null : guestLinks}
            {isAuthenticated ? adminLinks : null}
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(Header);
