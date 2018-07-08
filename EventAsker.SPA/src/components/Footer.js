import React, { Component } from 'react';
import "../styles/Footer.css";
import "../styles/Index.css";


class Footer extends Component {
    render(){
        return(
            <footer className="footer">
            <div className="container">
                <div  className="footer-item-left">
                <p>&copy; {new Date().getFullYear()} Copyright: Eventasker.pl</p>
                </div>
                <div className="footer-item-right">
                    <a href="https://www.facebook.com/ekadotnet/" target="_blank"><i className="fab fa-facebook-f footer-icons"></i></a>
                    <a href="https://twitter.com/ekadotnet" target="_blank"><i className="fab fa-twitter-square footer-icons"></i></a>
                    <a href="https://github.com/slapadominik/EventAsker" target="_blank"><i className="fab fa-github footer-icons"></i></a>
                </div>
                    
                <div className="clear"></div>

            </div>
          </footer>
        );
    }
}

export default Footer;