import React, { Component } from "react";
import logo from "../images/confused-nigga.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <center>
          <img src={logo} />
          <h1 className="col-md-3">EventAsker</h1>
          <h4 className="col-md-5">
            <i>Find answers for your questions</i>
          </h4>
        </center>
      </div>
    );
  }
}
