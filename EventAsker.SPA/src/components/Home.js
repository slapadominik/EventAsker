import React, { Component } from "react";
import "../styles/index.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="bgimage">
          <div className="container-fluid">
            <div className="hero-text">
              <h1>Find an event and join it!</h1>
            </div>
          </div>
        </div>
        <div className="container home-text">
          <p>
          EventAsker it is an application that helps speakers collect questions from the public during events. <br/>
          As an event participant you don't need any account to ask a question to event speaker!<br/> You only need a password to event you participate!<br/>
          If you want to create an event on our site, contact with us EventAsker@gmail.com.
          </p> 
          <p>
          EventAsker was created by group of students from the Wroclaw University of Science and Technology and mentored by PGS Software members.
          </p>
        </div>
      </div>
      
    );
  }
}
