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
import Code404 from './components/presentation/errorCodes/Code404';
import Code401 from './components/presentation/errorCodes/Code401';
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
            <Route path="/event/addQuestion" component={AddQuestionForm} />  
            <Route path="/unauthorized" component={Code401}/>
            <Route path="/event/addLectures/" component={AddLecturesForm} />
            <Route path="/event/editEvent/:id" component={EditEventForm}/>
            <Route path="*" component={Code404} />         
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
