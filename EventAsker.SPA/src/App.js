import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
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
import Unauthorized401 from './components/Unauthorized401';
import Footer from "./components/Footer";
import "./styles/index.css";
import AddLecturesForm from './components/AddLecturesForm';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/adminlogin" component={LoginForm} />
            <Route path="/events" component={ShowEvents} />
            <Route path="/addEvent" component={AddEventForm}/>
            <Route path="/addQuestion/:id" component={AddQuestionForm} />  
            <Route path="/unauthorized" component={Unauthorized401}/>
            <Route path="/addLectures/:id" component={AddLecturesForm} />
            <Route path="*" component={NotFound} />         
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
