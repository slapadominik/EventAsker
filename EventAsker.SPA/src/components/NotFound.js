import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NotFound extends Component {
    render() {
        return (
            <div class="404 Not Found">
                <div class="container">
                    <h1 class="display-4">404 Not Found</h1>
                    <p class="lead">Unfortunately, this page does not exist. Please check your URL or return to the <Link to="/" class="badge badge-dark">Home Page</Link>.</p>
                </div>
            </div>
        );
    }
}