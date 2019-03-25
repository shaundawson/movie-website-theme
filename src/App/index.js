import React, { Component } from "react";
import "./style.css";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "../Navbar";
import Hero from "../Hero";

class App extends Component {
  render() {
    return (
    <Router>
        <div>
        <Navbar/>
          <Switch>
              <Route exact path='/' component={Hero} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;