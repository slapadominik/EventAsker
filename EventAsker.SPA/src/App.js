import React, { Component } from 'react';
import './App.css';

class App extends Component {

  getValues = async(e) => {
      e.preventDefault();
      const api_call = await fetch("http://localhost:5000/api/values");
      const data = await api_call.json();
      console.log(data);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
        <p>Hello, click the button to console.log values fetched from API.</p>
        <button onClick={this.getValues}>Get Values!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
