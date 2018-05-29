import React, { Component } from "react";
import "react-dropdown/style.css";

class EventDescriptionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log("xD" + this.props);
  }

  render() {
    return (
        <div>
        <div className="container">
          <div className="events-group">
            <h2 className="txt-center"></h2>
            <div>xD</div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDescriptionForm;
