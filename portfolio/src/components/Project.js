import React from "react";
import { Component } from "react";

import "./Project.scss";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }

  render() {
    const projectsArray = this.props.projectsArray.find(
      project => `${project.id}` === this.state.id
    );
    return (
      <div className="project-container">
        <h1>{projectsArray.projectName}</h1>
      </div>
    );
  }
}

export default Project;
