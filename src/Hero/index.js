import React, { Component } from "react";
import Iframe from 'react-iframe'
import "./style.css";


const Hero = () => {
  return (
    <div className="jumbotron">
    <div class="container">
    <div class="row">
      <div class="col-md">
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
        One of three columns
      </div>
    </div>
  </div>
    </div>
  );
};
export default Hero;

