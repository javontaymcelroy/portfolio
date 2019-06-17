// ===================== DEPENDANCIES / COMPONENTS  ===================== //
import React from "react";
import { Component } from "react";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";

// ===================== STYLES ===================== //
import "./App.scss";
import Projects from "./components/Projects";
import Home from "./components/Home";

// ===================== COMPONENT ===================== //
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route component={Home} exact path="/" />
        <Route component={Projects} path="/projects" />
      </div>
    );
  }
}

export default App;
