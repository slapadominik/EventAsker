import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../index.css';


export default class Header extends Component {
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                            <Link className="navbar-brand" to="/">EventAsker</Link>
                    </div>  
                        <ul className="nav navbar-nav flex-row">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>   
                            <li><Link to="/events">Events</Link></li>                      
                        </ul>
                 </div>
                
            </nav>
        );
    }
}