import React, { Component } from 'react';
import "../styles/Footer.css";

class Footer extends Component {
    render(){
        return(
        <footer className="mainfooter">
        <div className="footer-bottom">
            <div className="container">
                <p>&copy; Copyright 2018.  All rights reserved.</p>
            </div>
        </div>
        </footer>
        );
    }
}

export default Footer;