import React, { Component } from "react";
import "./style.css";
import Iframe from 'react-iframe';

const Contact = () => {
  return (
    <div class="contact-form align-center">
    <section class="mb-4">
    <h4 class="h4-responsive  my-4">Send a message</h4>
    <div class="row">
   
        <div class="col-md-7 mb-md-0 mb-6">
        <Iframe url="https://iamsdawson.formstack.com/forms/nylasostre"
        width="100%"
        height="700px"
        id="myId"
        className="contactForm"
        position="relative"
        allow="encrypted-media"
        overflow="hidden"
        allowFullScreen/>


        </div>
    
        <div class="col-md-4 mb-md-0 mb-6 twitter">
        <a class="twitter-follow-button"
        href="https://twitter.com/nylaninjarose">
        </a>
        <a class="twitter-timeline" 
        data-width="300" 
        data-height="300"
        data-link-color="#f5a5b9" 
        data-tweet-limit="2"
        data-chrome=" nofooter noscrollbar noheader"
         href="https://twitter.com/nylaninjarose?ref_src=twsrc%5Etfw">Tweets by nylaninjarose</a> 
        </div>
    </div>
    
</section>



</div>
  );
};
export default Contact;