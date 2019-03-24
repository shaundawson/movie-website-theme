import React, { Component } from "react";
import Iframe from 'react-iframe'
import "./style.css";


const Hero = () => {
  return (
    <div className="jumbotron">
    <div class="container">
    <div class="row">
      <div class="col-sm">
      <Iframe url="https://player.vimeo.com/video/325810319?title=0&byline=0&portrait=0"
      width="720px"
      height="480px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
      allowFullScreen/>
      </div>
      <div class="col-sm">
      <hr></hr>
      <h4>
      HOST A SCREENING
      </h4>
      <p>
      If you are interested in bringing the film to your community or campus, please fill out the form below and we will be in touch shortly!
      </p>
      </div>
    </div>
  </div>
    </div>
  );
};
export default Hero;

