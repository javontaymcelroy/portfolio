import React from 'react';
import { Component } from 'react';

import './Project.scss';
import './ProjectsMobileResponsive.scss';

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
      <div className='project-container'>
        <img
          src={projectsArray.projectImg}
          alt={projectsArray.projectName}
          className='single-project-image'
        />
        <div className='project-content'>
          <h1>{projectsArray.projectName}</h1>
          <h4>{projectsArray.projectRole}</h4>
          <p>{projectsArray.projectDesc}</p>
          <h4>Tech Stack: {projectsArray.languages}</h4>
          <div className='button-flex'>
            <a
              href={projectsArray.projectUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              Visit
            </a>
            {projectsArray.githubUrl ? (
              <a
                href={projectsArray.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
