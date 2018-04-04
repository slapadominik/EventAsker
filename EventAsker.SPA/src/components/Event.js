import React, { Component } from 'react';
import '../index.css';


export default class Header extends Component {
    
    constructor(){
        super();
        this.state = {
            eventId: 0,
            eventName: 'Spotkanko',
            eventDescription: 'januszowe',
            eventSteet: 'poziomkowa',
            eventCity: 'Wawa',
            eventDate: '21/11/1999'

        }
    }
    
    render(){
        return(
<div class = "card">
    <div class="card-header" ref={div => {this.eventheader = div;}}>
      <span>
      <h5>
        {this.props.eventName} 
        </h5> 
      <button class="btn btn-alert-primary" data-toggle="collapse" data-target={this.descdiv} aria-expanded="true" aria-controls={this.descdiv}>
           DESCRIPTION
      </button>
      <button class="btn btn-danger">
          Delete
      </button>
      </span> 
    </div>

    <div class="collapse show"  ref={div => {this.descdiv = div;}} aria-labelledby={this.eventheader} data-parent="accordion">
      <div class="card-body">
        Street: {this.props.eventStreet}
        Description: {this.props.eventDescription}
      </div>
    </div>
</div>
        );
    }
}