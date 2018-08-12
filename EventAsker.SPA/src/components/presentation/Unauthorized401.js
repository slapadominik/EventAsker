import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../styles/Errors.css";

export default class Unauthorized401 extends Component {
    render() {
        return (
            <div class="errorpage">
                <div class="container">
                    <h1 class="display-4">Daaaamn it's <span>401 Unauthorized error </span></h1>
                    <p class="lead"> You don't have permission, better go away!</p>
                    <div class="holder"> <Link to="/" class="btn btn-secondary">Home Page</Link> </div> 
                </div>
            </div>
        );
    }
}