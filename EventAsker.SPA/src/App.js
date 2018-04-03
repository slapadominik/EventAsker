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

class App extends Component {

  getValues = async(e) => {
      e.preventDefault();
      const api_call = await fetch("http://localhost:5000/api/values");
      const data = await api_call.json();
      console.log(data);
  }

  render() {
    return (
        <Router> 
          <div className="container">
          <Header/>
    
            <Route exact path="/" component={Home} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
          </div>
        </Router>    
    );
  }
}

export default App;
