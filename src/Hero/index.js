import React, { Component } from "react";
import "./style.css";
import 'responsive-iframe';


const Hero = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <iframe className= "iframe" src="https://player.vimeo.com/video/325810319?title=0&byline=0&portrait=0" 
      frameborder="0" 
      webkitallowfullscreen 
      mozallowfullscreen 
      allowfullscreen></iframe>
      </div>
  );
};
export default Hero;

