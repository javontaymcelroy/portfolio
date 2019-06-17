import React from "react";
import { Link } from "react-router-dom";

import heroImg from "../assets/images/hold_up.png";
import github from "../assets/images/github.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";

import "../App.scss";

const Home = () => {
  return (
    <>
      <div className="hero-content">
        <h1 className="hero-title">JAVONTAY McELROY</h1>
        <h6 className="hero-caption">
          Full Stack Web Developer | UI / UX Designer
        </h6>
      </div>
      <div className="hero-image-container">
        <img src={heroImg} className="hero-image" alt="hero" />
        <Link to="/projects" className="general-links">
          <button className="white-btn">See my Projects</button>
        </Link>
      </div>
      <div className="scroll-down-container">
        <h1 className="scroll-down">Scroll down</h1>
        <span className="scroll-line" />
      </div>
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
    </>
  );
};

export default Home;
