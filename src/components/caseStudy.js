import React from "react";
import { Component } from "react";

import "./caseStudy.scss";
import "./caseStudyMobile.scss";

class caseStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
    };
  }
  render() {
    window.scroll(0, 0);
    const projectsArray = this.props.projectsArray.find(
      (project) => `${project.id}` === this.state.id
    );
    return (
      <>
        <div className="caseStudy-container">
          <div className="case-hero-container">
            <div className="hero-text">
              <h1 className="case-title">{projectsArray.projectName}</h1>
              <h2 className="case-tagline">{projectsArray.tagline}</h2>
              <h1 className="case-role">{projectsArray.projectRole}</h1>
              <h1 className="case-date">{projectsArray.date}</h1>
            </div>

            <img
              src={projectsArray.caseHero}
              alt="dandi hero"
              className="case-hero"
            />
          </div>
          <div className="case-study-content">
            <h5 className="about-project">About the project</h5>
            {/* ===== Section One ===== */}
            <h2 className="case-header no-margin">
              {projectsArray.sectionOne}
            </h2>
            <p className="case-body">{projectsArray.sectionOneBody}</p>
            <video autoPlay loop className="case-image fullWidth">
              <source src={projectsArray.sectionOneVideo} type="video/mp4" />
            </video>

            {/* ===== Section Two - Visual Identity ===== */}
            <h2 className="case-header">{projectsArray.sectionTwo}</h2>
            <p className="case-body">{projectsArray.sectionTwoBody}</p>
            <img
              src={projectsArray.sectionTwoImage}
              alt="screens"
              className="case-image no-margin fullWidth"
            />
            <img
              src={projectsArray.mockupOne}
              alt="screens"
              className="case-image image-border fullWidth"
            />
            {/* ===== Section Three ===== */}
            <h2 className="case-header">{projectsArray.sectionThree}</h2>
            <p className="case-body">{projectsArray.sectionThreeBody}</p>
            <video autoPlay loop mute className="case-image ">
              <source src={projectsArray.sectionThreeImage} type="video/mp4" />
            </video>

            {/* ===== Section Four ===== */}
            <h2 className="case-header">{projectsArray.sectionFour}</h2>
            <p className="case-body">{projectsArray.sectionFourBody}</p>
            <img
              src={projectsArray.sectionFourImage}
              alt="screens"
              className="case-image"
            />
            <h2 className="case-header">{projectsArray.sectionFive}</h2>
            <p className="case-body">{projectsArray.sectionFiveBody}</p>
            <video autoPlay loop mute className="case-image ">
              <source src={projectsArray.sectionFiveImage} type="video/mp4" />
            </video>
            {/* ===== Section Six ===== */}
            <h2 className="case-header">{projectsArray.sectionSix}</h2>
            <h3 className="case-subheader">
              {projectsArray.sectionSixSubHeader}
            </h3>
            <p className="case-body">{projectsArray.sectionSixBody}</p>
            <img
              src={projectsArray.sectionSixImage}
              alt="screens"
              className="case-image"
            />
            {/* ===== Section Seven ===== */}
            <h2 className="case-header">{projectsArray.sectionSeven}</h2>
            <p className="case-body">{projectsArray.sectionSevenBody}</p>
            <img
              src={projectsArray.sectionSevenImage}
              alt="screens"
              className="case-image"
            />
            {/* ===== Section Eight ===== */}
            <h2 className="case-header">{projectsArray.sectionEight}</h2>
            <p className="case-body">{projectsArray.sectionEightBody}</p>
            <video autoPlay loop mute className="case-image ">
              <source src={projectsArray.sectionEightImage} type="video/mp4" />
            </video>
            {/* ===== Closing ===== */}
            <h2 className="case-header">{projectsArray.closingHead}</h2>
            <h3 className="case-subheader">{projectsArray.closingSubHead}</h3>
            <p className="case-body">{projectsArray.closingBody}</p>

            <span className="divider"></span>
          </div>
        </div>
        <div className="border-grid">
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
          <span className="border" />
        </div>
      </>
    );
  }
}

export default caseStudy;
