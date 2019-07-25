// ===================== DEPENDANCIES / COMPONENTS  ===================== //
import React from "react";
import { Component } from "react";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";

// ===================== STYLES ===================== //
import "./App.scss";
import Home from "./components/Home";

// ===================== ASSETS ===================== //
import pokestat from "../src/assets/images/pokestat.png";
import cinema3000 from "../src/assets/images/Cinema3000.png";
import spectre from "../src/assets/images/spectre.png";
import blackhole from "../src/assets/images/blackholescreenshot.png";
import hercules from "../src/assets/images/hercules.png";
import nasa from "../src/assets/images/nasa_redesign.png";

import micah from "../src/assets/images/Micah.jpg";
import kuzco from "../src/assets/images/Kuzco-background.jpg";
import beyonce from "../src/assets/images/Witch-Beyonce-final.jpg";
import manu from "../src/assets/images/Manu.jpg";
import natural from "../src/assets/images/Natrual.jpg";
import xj9 from "../src/assets/images/XJ9.jpg";
import Project from "./components/Project";

// ===================== PROJECT ARRAY ===================== //
const projectsArray = [
  {
    id: 1,
    projectName: "Pokéstats",
    projectImg: pokestat,
    projectRole: "Front-End Developer & UI / UX Designer",
    projectDesc: "",
    githubUrl: "",
    projectUrl: "",
    languages: "ReactJs / CSS / Axios, Node.js / Postgres / Express.js"
  },
  {
    id: 2,
    projectName: "Cinema3000",
    projectImg: cinema3000,
    projectRole: "Front-End Developer & UI / UX Designer",
    projectDesc: "",
    githubUrl: "",
    projectUrl: "",
    languages: "ReactJs / CSS / Axios"
  },
  {
    id: 3,
    projectName: "Spectre",
    projectImg: spectre,
    projectRole: "Front-End Developer & UI / UX Designer",
    projectDesc: "",
    githubUrl: "",
    projectUrl: "",
    languages: "ReactJs / CSS / Axios"
  },
  {
    id: 4,
    projectName: "NASA - Redesign",
    projectImg: nasa,
    projectRole: "UI / UX Designer",
    projectDesc: "",
    githubUrl: "",
    projectUrl: "",
    languages: "Adobe Photoshop CC"
  },
  {
    id: 5,
    projectName: "BlackHole",
    projectImg: blackhole,
    projectRole: "Front-End Developer & UI / UX Designer",
    projectDesc: "",
    githubUrl: "",
    projectUrl: "",
    languages: "ReactJs / CSS / Axios"
  },
  {
    id: 6,
    projectName: "Hercules",
    projectImg: hercules,
    projectRole: "Front-End Developer & UI / UX Designer",
    projectDesc: "",
    githubUrl: "",
    projectUrl: "",
    languages: "ReactJs / SASS / Axios / Node.js / Express"
  }
];

// ===================== ART ARRAY ===================== //
const artArray = [
  {
    artImg: micah
  },
  {
    artImg: kuzco
  },
  {
    artImg: beyonce
  },
  {
    artImg: manu
  },
  {
    artImg: natural
  },
  {
    artImg: xj9
  }
];

// ===================== COMPONENT ===================== //
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsArray,
      artArray
    };
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          render={props => (
            <Home
              {...props}
              projectsArray={this.state.projectsArray}
              artArray={this.state.artArray}
            />
          )}
          exact
          path="/"
        />
        <Route
          render={props => (
            <Project
              {...props}
              projectsArray={this.state.projectsArray}
              artArray={this.state.artArray}
            />
          )}
          exact
          path="/:id"
        />
      </div>
    );
  }
}

export default App;
