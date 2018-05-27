import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./errors.css";

export default class NotFound extends Component {
    render() {
        return (
            <div class="errorpage">
                <div class="container">
                    <h1 class="display-4">Oops, <span>404 Not Found</span></h1>
                    <p class="lead">Unfortunately, this page does not exist. Please check your URL or return to the</p>
                   <div class="holder"><Link to="/" class="btn btn-secondary">Home Page</Link> </div> 
                </div>
            </div>
        );
    }
}