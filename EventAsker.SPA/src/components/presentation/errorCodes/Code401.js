import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../../styles/Errors.css";

export default class Code401 extends Component {
    render() {
        return (
            <div className="errorpage">
                <div className="container">
                    <h1 className="display-4">Daaaamn it's <span>401 Unauthorized error </span></h1>
                    <p className="lead"> You don't have permission, better go away!</p>
                    <div className="holder"> <Link to="/" className="btn btn-secondary">Home Page</Link> </div> 
                </div>
            </div>
        );
    }
}