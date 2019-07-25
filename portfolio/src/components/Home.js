import React from "react";
import { Link } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";

import Slider from "react-slick";

import heroImg from "../assets/images/hold_up.png";
import github from "../assets/images/github.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";

import angel from "../assets/images/angel.png";

import "../App.scss";

const Home = ({ projectsArray, artArray }) => {
  var settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  var settingsArt = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="hero-content">
          <h1 className="hero-title">JAVONTAY McELROY</h1>
          <h6 className="hero-caption">
            Full Stack Web Developer | UI / UX Designer
          </h6>
        </div>
        <div className="hero-image-container">
          <img src={heroImg} className="hero-image" alt="hero" />
          <a href="#projects" className="general-links">
            <button className="white-btn">See my Projects</button>
          </a>
        </div>
        <div className="scroll-down-container">
          <h1 className="scroll-down">Contact Me</h1>
          <span className="scroll-line" />
        </div>

        <ScrollableAnchor id={"projects"}>
          <div className="break">
            <img src={angel} alt="projects-break" className="angel" />
            <div className="break-title-left">
              <h1>Projects Crafted With Love</h1>
              <p>
                Here lies a selection of some of my best and favorite projects
                as a Web Developer that I am incredibly proud to have been apart
                of and help make possible.
              </p>
            </div>
          </div>
        </ScrollableAnchor>

        <Slider {...settings}>
          {projectsArray.map(project => (
            <div>
              <Link to={`/${project.id}`}>
                <img src={project.projectImg} className="project-image" />
                <div className="project-info">
                  <p className="project-title">{project.projectName}</p>
                  <p className="project-stack">
                    Tech stack: {project.languages}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>

        <div className="break">
          <img src={angel} alt="projects-break" className="angel-flipped" />
          <div className="break-title-right">
            <h1>DIGITAL ART & ILLUSTRATION</h1>
            <p>
              Here lies a selection of some of my best and favorite projects as
              a Web Developer that I am incredibly proud to have been apart of
              and help make possible.
            </p>
          </div>
        </div>

        <Slider {...settingsArt}>
          {artArray.map(piece => (
            <div>
              <img src={piece.artImg} className="art-image" />
            </div>
          ))}
        </Slider>

        <div className="social-links">
          <img src={github} alt="github" className="social-icon" />
          <img src={instagram} alt="instagram" className="social-icon" />
          <img src={twitter} alt="twitter" className="social-icon" />
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
      </div>
    </>
  );
};

export default Home;
