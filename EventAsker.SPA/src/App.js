import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import './styles/App.css';
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
import AddQuestionForm from './components/AddQuestionForm';
import NotFound from './components/NotFound';
import Footer from "./components/Footer";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="site">
          <Header />
          <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/events" component={ShowEvents} />
            <Route path="/addEvent" component={AddEventForm}/>
            <Route path="/addQuestion/:id" component={AddQuestionForm} />  
            <Route path="*" component={NotFound} />
          </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
