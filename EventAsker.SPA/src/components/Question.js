import React, { Component } from 'react';
import "../styles/Event.css";

export default class Question extends Component{
    render(){
        return(
            <div className="row-flex card question">
                <div><b>Autor</b>: {this.props.authorName} </div>
                <div><b>Email</b>: {this.props.email}</div>
                <div><b>Treść</b>: {this.props.questionContent}</div>
            </div>
        );
    }
}
