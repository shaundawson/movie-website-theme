import React, { Component } from "react";
import "./style.css";

const Bio = () => {
  return (
    <div className="bio">
      <section class="about-section p-3 p-lg-3 d-flex d-column" id="about">
        <div class="header-name">
          <h1 class="mb-0">Nyla
        <span class="text-primary">Sostre</span>
          </h1>
          <br></br>
          <p class="lead mb-5">Raised on the rebellious and uplifting sounds of artists like Nina Simone, Celia Cruz, Selena, Erykah Badu, Lauryn Hill, Etta James and Beyonce, Nyla uses every click of her tongue and belted harmony to tell the very human stories of love, loss and lessons learned. Raw and unfiltered vocals and lyrics are based on her life experiences as an Afro-Latina youth growing up in Brooklyn, NY. The high intensity voice of this singer/songwriter (and her acoustic guitar "Betty Blue”) can be found gracing the stage as Peggy Schuyler in Lin-Manuel Miranda’s Hamilton or on her debut album <i> Nyla Live </i>.
          </p>
          <a href="/contact" class="btn btn-secondary" role="button" aria-disabled="true">Contact</a>
        <br></br>
        <br></br>
          </div>
      </section>
    </div>
  );
};
export default Bio;
