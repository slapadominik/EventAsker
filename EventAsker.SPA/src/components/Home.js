import React, { Component } from "react";
import logo from "../images/conference_home.jpg";
import "../styles/index.css";
import Header from "./Header";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="bgimage">
          <div className="container-fluid">
            <div className="hero-text">
              <h1>Find an event and join it!</h1>
            </div>
          </div>
        </div>
        <div className="container home-text">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique tincidunt ante a fermentum. 
          Ut faucibus condimentum quam sit amet feugiat. Sed fermentum felis diam, et finibus metus convallis eget. 
          Maecenas dignissim justo vitae felis pellentesque, at posuere sapien facilisis. 
          Donec quis magna cursus, vehicula purus ut, accumsan justo. 
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Curabitur eu purus nunc. Morbi ac viverra sem, sed finibus nisi. Praesent arcu nulla, mollis ut felis elementum, accumsan lobortis mauris. 
          Sed non diam malesuada, accumsan mauris non, aliquet mi.
          </p> 
          <p>  
          Morbi malesuada a erat nec cursus. Duis mollis neque ut purus iaculis, eget bibendum est molestie. 
          Quisque accumsan tellus ligula, ac fermentum enim facilisis quis. Sed placerat ullamcorper massa non vulputate. 
          Sed tincidunt cursus orci nec tincidunt. Donec nulla est, venenatis non libero vitae, mollis eleifend eros. 
          Vestibulum gravida velit velit, eget molestie dolor malesuada a. Donec facilisis lobortis augue a maximus. 
          Nunc sed mauris ornare, tempor quam sit amet, porttitor enim. 
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Proin elementum felis sit amet mattis venenatis. Aliquam vitae varius sapien, vitae pulvinar ex. 
          Aenean posuere orci non nulla porttitor, quis aliquet erat lobortis. Fusce dignissim tincidunt luctus.
          </p>
        </div>
      </div>
      
    );
  }
}
