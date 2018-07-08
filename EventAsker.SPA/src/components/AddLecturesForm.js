import React, { Component } from 'react';
import "../styles/Form.css";
import axios from "axios";
import {BASE_URL} from "../constants";
import { withRouter } from 'react-router-dom';
 
class AddLecturesForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            lectures : [{topic: "",
            description: "",
            starttime: "",
            endtime: "",
            lecturername: "", 
            eventId: parseInt(this.props.location.pathname.split('/')[2], 10)
        }]
      }
    }


    handleLecturePropertyInput = (idx) => (evt) => {
        const newLectures = this.state.lectures.map((lecture, sidx) => {
          if (idx !== sidx) return lecture;
          return { ...lecture, [evt.target.name]: evt.target.value};
        });
        console.log(evt.target.name)
        this.setState({ lectures: newLectures });
    }
    
    handleAddLecture = () => {
        this.setState({ lectures: this.state.lectures.concat([{topic: "", description: "", starttime: "", endtime: "", lecturername: "", eventId: parseInt(this.props.location.pathname.split('/')[2], 10)}])})
    }
      
    handleRemoveLecture = (idx) => () => {
        this.setState({ lectures: this.state.lectures.filter((s, sidx) => idx !== sidx) });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post(BASE_URL + "/lecture/addLectures", {
            Lectures : this.state.lectures
        })
        .then(response => {
            this.props.history.push('/events');
        });
    }

    render(){
        return(
            <div className="form-center">
                <h2 className="form-title">Add lectures</h2>
                <form noValidate>
                <div>
                    {this.state.lectures.map((lecture, id) => (
                <div key={id}>
                <div className="row">
                <div className="form-group col-md-8 offset-md-2">
                <input
                    className="form-control"
                    type="text"
                    placeholder={`Lecture's topic`}
                    value={lecture.topic}
                    name="topic"
                    onChange={this.handleLecturePropertyInput(id)}
                 />
                </div>
                </div>
                <div className="row">
                <div className="form-group col-md-8 offset-md-2">
                 <textarea
                    className="form-control"
                    type="text"
                    placeholder={`Lecture's description`}
                    value={lecture.description}
                    name="description"
                    onChange={this.handleLecturePropertyInput(id)}
                />
                </div>
                </div>
                <div className="row">
                <div className="form-group col-md-8 offset-md-2">
                <input
                    className="form-control"
                    type="time"
                    value={lecture.starttime}
                    name="starttime"
                    onChange={this.handleLecturePropertyInput(id)}
                />
                 </div>
                 </div>
            <div className="row">
            <div className="form-group col-md-8 offset-md-2">
             <input
              className="form-control"
              type="time"
              value={lecture.endtime}
              name="endtime"
              onChange={this.handleLecturePropertyInput(id)}
            />
            </div>
            </div>
            <div className="row">
            <div className="form-group col-md-8 offset-md-2">
             <input
              className="form-control"
              type="text"
              placeholder={`Lecturer's name`}
              value={lecture.lecturername}
              name="lecturername"
              onChange={this.handleLecturePropertyInput(id)}
            />
                </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-4 offset-md-2">
                        <button type="button" className="btn btn-success" onClick={this.handleAddLecture}>Add lecture</button>
                    </div>
                    <div className="form-group col-md-2 offset-md-1">
                    <button type="button" className="btn btn-danger" onClick={this.handleRemoveLecture(id)}>Delete lecture</button>
                    </div>
                </div>
            </div>
            ))}
            <div className="button-form">
            <button
              type="submit"
              id="sumbitBtn"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Add Lectures
            </button>
             </div>
            </div>
            </form>
        </div>            
        );
    }
}

export default withRouter(AddLecturesForm);