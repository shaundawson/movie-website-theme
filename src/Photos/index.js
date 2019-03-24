import React, { Component } from "react";
import "./style.css";
import Iframe from 'react-iframe';

const Photos = () => {
  return (
    <div className="photos">
    <a href="https://www.instagram.com/nylanana/" target="_blank">
    <img border="0" alt="instagram-nylanana" src="https://i.imgur.com/paKtNng.png" width="180" height="60" className="bandsintown"/>
    </a>
    <section>
    <Iframe url="https://snapwidget.com/embed/657237"
        width="100%"
        height="600px"
        id="myId"
        className="snapwidget-widget"
        position="relative"
        allow="encrypted-media"
        overflow="hidden"
        allowFullScreen/>
        </section>
    </div>
  );
};
export default Photos;
