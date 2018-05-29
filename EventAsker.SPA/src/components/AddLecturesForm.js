import React, { Component } from 'react';

export default class AddEventForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            topic: "",
            description: "",
            starttime: "",
            endtime: "",
            lecturername: ""
        };
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
        this.setState({ lectures: this.state.lectures.concat([{topic: "", description: "", starttime: "", endtime: "", lecturername: ""}])})
    }
      
    handleRemoveLecture = (idx) => () => {
        this.setState({ lectures: this.state.lectures.filter((s, sidx) => idx !== sidx) });
    }

    render(){
        return(
            <div>
                <div>
          {this.state.lectures.map((lecture, id) => (
          <div key={id}>
            <div className="row">
            <div className="col-md-8 offset-md-2">
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
            <div className="col-md-8 offset-md-2">
             <textarea
              type="text"
              placeholder={`Lecture's description`}
              value={lecture.description}
              name="description"
              onChange={this.handleLecturePropertyInput(id)}
            />
             </div>
             </div>
             <div className="row">
             <input
              type="time"
              value={lecture.starttime}
              name="starttime"
              onChange={this.handleLecturePropertyInput(id)}
            />
            </div>
            <div className="row">
             <input
              type="time"
              value={lecture.endtime}
              name="endtime"
              onChange={this.handleLecturePropertyInput(id)}
            />
            </div>
            <div className="row">
             <input
              type="text"
              placeholder={`Lecturer's name`}
              value={lecture.lecturername}
              name="lecturername"
              onChange={this.handleLecturePropertyInput(id)}
            />
             </div>
            <button type="button" onClick={this.handleRemoveLecture(id)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddLecture} className="small">Add Shareholder</button>
        </div>
        </div>            
        );
    }
}