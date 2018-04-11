import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ShowEvents from './components/ShowEvents';
import AddEventForm from './components/AddEventForm';

class App extends Component {

  render() {
    return (
        <Router> 
          <div className="container">
          <Header/>
    
            <Route exact path="/" component={Home} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/events" component={ShowEvents} />
            <Route path="/addEvent" component={AddEventForm} />
          </div>
        </Router>    
    );
  }
}

export default App;
