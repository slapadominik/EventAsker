import React, { Component } from 'react';

export default class Question extends Component{
    render(){
        return(
            <div className="row-flex card">
                <div><b>Autor</b>: {this.props.authorName} </div>
                <div><b>Email</b>: {this.props.email}</div>
                <div><b>Treść</b>: {this.props.questionContent}</div>
            </div>
        );
    }
}

