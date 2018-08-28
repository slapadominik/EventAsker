import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/Index.css";
import { logout } from "../../actions/userAction";
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
        <li className="nav-item">
            <Link className="nav-link" to="/addEvent">Add Event<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/register">Register<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" onClick={this.logout}>Logout<span className="sr-only">(current)</span></a>
        </li>
      </React.Fragment>
    );
    const guestLinks = (
      <React.Fragment>
        <li className="nav-item">
            <Link className="nav-link" to="/adminlogin">Logowanie<span className="sr-only">(current)</span></Link>
        </li>
      </React.Fragment>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img  className="hidden-xs" src="images/logo.jpg" alt="EventAsker"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Strona główna<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">Wydarzenia<span className="sr-only">(current)</span></Link>
              </li>
              {isAuthenticated ? null : guestLinks}
              {isAuthenticated ? adminLinks : null}
            </ul>
          </div>   
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
