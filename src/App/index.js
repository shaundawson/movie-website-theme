import React, { Component } from "react";
import "./style.css";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from "../Navbar";
import Bio from "../Bio";
import News from "../News";
import Photos from "../Photos";
import Contact from "../Contact";
import Hero from "../Hero";
import Footer from "../Footer";

class App extends Component {
  render() {
    return (
    <Router>
        <div>
        <Navbar/>
          <Switch>
              <Route exact path='/' component={Hero} />
              <Route path='/bio' component={Bio} />
              <Route path='/news' component={News} />
              <Route path='/photos' component={Photos} />
              <Route path='/contact' component={Contact} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;