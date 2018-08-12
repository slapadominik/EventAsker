import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import Header from "./components/containers/Header";
import Home from './components/presentation/Home';
import RegisterForm from './components/presentation/RegisterForm';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LoginForm from './components/containers/LoginForm';
import AddEventForm from './components/presentation/AddEventForm';
import AddQuestionForm from './components/containers/AddQuestionForm';
import NotFound from './components/presentation/NotFound';
import Unauthorized401 from './components/presentation/Unauthorized401';
import Footer from "./components/presentation/Footer";
import "./styles/Index.css";
import AddLecturesForm from './components/presentation/AddLecturesForm';
import EditEventForm from './components/presentation/EditEventForm';
import EventListContainer from './components/containers/EventListContainer';

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
            <Route path="/events" component={EventListContainer} />
            <Route path="/addEvent" component={AddEventForm}/>
            <Route path="/addQuestion/:id" component={AddQuestionForm} />  
            <Route path="/unauthorized" component={Unauthorized401}/>
            <Route path="/addLectures/:id" component={AddLecturesForm} />
            <Route path="/editEvent/:id" component={EditEventForm}/>
            <Route path="*" component={NotFound} />         
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
