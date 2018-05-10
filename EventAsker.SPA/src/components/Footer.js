import React, { Component } from 'react';
import "../styles/Footer.css";
import "../styles/index.css";

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
            <div className="container">
              <span className="text-muted">Eventasker.pl&#169; {new Date().getFullYear()}</span>
            </div>
          </footer>
        );
    }
}

export default Footer;