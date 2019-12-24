import {hot} from "react-hot-loader";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RapportsCollection from "./components/RapportsCollection";
import Rapport from "./components/Rapport";
import "./App.css";

class App extends Component {
  render(){
    return (
      <Router>
      <main>
        <Link to="/">
        <h1> Monthly budget overview </h1> 
        </Link>
        <Switch>
          <Route path="/" exact component={RapportsCollection} />
          <Route path="/rapport/:id" component={Rapport} />
        </Switch>
      </main>
      </Router>
    )
  }
}

export default hot(module)(App);