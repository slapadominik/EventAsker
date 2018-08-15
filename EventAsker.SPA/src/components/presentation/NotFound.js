import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../styles/Errors.css";

export default class NotFound extends Component {
    render() {
        return (
            <div className="errorpage">
                <div className="container">
                    <h1 className="display-4">Oops, <span>404 Not Found</span></h1>
                    <p className="lead">Unfortunately, this page does not exist. Please check your URL or return to the</p>
                   <div className="holder"><Link to="/" className="btn btn-secondary">Home Page</Link> </div> 
                </div>
            </div>
        );
    }
}