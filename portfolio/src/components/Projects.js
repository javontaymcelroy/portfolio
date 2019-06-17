import React from "react";
import { Component } from "react";

import pokestats from "../assets/images/pokestat.png";
import prev from "../assets/images/chevron-left.svg";
import next from "../assets/images/chevron-right.svg";

import "./Projects.scss";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="projects-container">
        <div className="project">
          <div className="project-caption">
            <h1 className="project-title">Pokéstats</h1>
            <h6 className="project-role">
              Front-End Developer & UI / UX Designer
            </h6>
          </div>
          <img src={pokestats} alt="Pokéstats" className="project-image" />
        </div>
      </div>
    );
  }
}

export default Projects;
