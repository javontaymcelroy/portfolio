import React from "react";
import { Component } from "react";

import pokestats from "../assets/images/pokestat.png";
import prev from "../assets/images/chevron-left.svg";
import next from "../assets/images/chevron-right.svg";

import "./Projects.scss";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projectsArray
    };
  }
  render() {
    return (
      <div className="projects-container">
        {this.state.projects.map(project => (
          <div className="project">
            <div className="project-caption">
              <h1 className="project-title">{project.projectName}</h1>
              <h6 className="project-role">{project.projectRole}</h6>
            </div>
            <img
              src={project.projectImg}
              alt={project.projectName}
              className="project-image"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
