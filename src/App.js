import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { Route, Switch } from 'react-router-dom';
import RapportsCollection from "./components/RapportsCollection";
import "./App.css";

class App extends Component {
  render(){
    return (
      <main>
        <h1> Monthly budget overview </h1> 
        <Switch>
          <Route path="/" component={RapportsCollection} exact />

          {/* Link id from rapport and navigate to that specific rapport */}
          {/* <Route path="/" component={RapportsCollection} exact /> */}

        </Switch>
      </main>
    )
  }
}

export default hot(module)(App);