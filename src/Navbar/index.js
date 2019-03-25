import React from 'react';
import "./style.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
      <a href="/">
      <img className="logo-image" src="https://i.imgur.com/J8nHHkx.png" alt="assigned sex logo" />
      </a> 

        <a className="navbar-brand" className="logo" href="/home"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span>
        <i className="fas fa-bars"></i>
    </span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
            </li>
            <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Follow 
              <span className="caret">
              <i className="fas fa-caret-down"></i>
        
              </span></a>
              <ul className="dropdown-menu">
                <li><a href="https://www.facebook.com/AssignedSex/" target="blank" className="padding-list">Facebook</a></li>
                <li><a href="https://twitter.com/assignedsex" target="blank" className="padding-list">Twitter</a></li>
              </ul>
            </li>
          </ul>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;


