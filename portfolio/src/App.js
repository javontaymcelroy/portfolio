// ===================== DEPENDANCIES / COMPONENTS  ===================== //
import React from "react";
import { Component } from "react";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";

// ===================== STYLES ===================== //
import "./App.scss";
import Projects from "./components/Projects";
import Home from "./components/Home";

// ===================== ASSETS ===================== //
import pokestat from "../src/assets/images/pokestat.png";

// ===================== PROJECT ARRAY ===================== //
const projectsArray = [
  {
    projectName: "Pokéstats",
    projectImg: pokestat,
    projectRole: "Front-End Developer & UI / UX Designer",
    projectDesc: "",
    githubUrl: "",
    projectUrl: "",
    languages: "ReactJs, CSS, Axios"
  }
];

// ===================== COMPONENT ===================== //
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsArray
    };
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route component={Home} exact path="/" />
        <Route
          path="/projects"
          render={props => (
            <Projects {...props} projectsArray={this.state.projectsArray} />
          )}
        />
      </div>
    );
  }
}

export default App;
