import React, { Component } from 'react';
import '../index.css';


export default class Header extends Component {
    
    constructor(){
        super();
        this.state = {
            eventName: 'Spotkanko',
            eventDescription: 'januszowe',
        }
    }
    
    render(){
        return(

                    <div>  
                            <h3>{this.props.eventName}</h3>
                            <p>{this.props.eventDescription}</p>                
                    </div>            
        );
    }
}