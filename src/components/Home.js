import React from "react";
import { Link } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import heroImg from "../assets/images/hold_up.png";
import github from "../assets/images/github.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";

import angel from "../assets/images/angel.png";

import "../App.scss";

const Home = ({ projectsArray, artArray }) => {
  const color = "white";
  const trailColor = "#474747";
  return (
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
        <a href="#contact" className="scroll-down">
          Contact Me
        </a>
        <span className="scroll-line" />
      </div>

      <ScrollableAnchor id={"projects"}>
        <div className="break">
          <img src={angel} alt="projects-break" className="angel" />
          <div className="break-title-left">
            <h1>Projects Crafted With Love</h1>
            <p>
              Here's a collection of some of my best and favorite projects as a
              Web Developer that I am incredibly proud to have been apart of and
              help make possible.
            </p>
          </div>
        </div>
      </ScrollableAnchor>

      <div className="projects-container">
        {projectsArray.map(project => (
          <Link to={`/${project.id}`} key={project.id}>
            <div className="project">
              <img
                src={project.projectThumbnail}
                className="project-image"
                alt={project.projectName}
              />
              <div className="project-info">
                <p className="project-id">0{project.id}</p>
                <div>
                  <p className="project-type">{project.projectType}</p>
                  <p className="project-title">{project.projectName}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="break">
        <img src={angel} alt="projects-break" className="angel-flipped" />
        <div className="break-title-right">
          <h1>THE SKILL SET OF A F.S.W.D.</h1>
          <p>
            I am a full-stack web developer. Capable of building both basic and
            complex web apps! Here's a visual of my abilities as a developer!
          </p>
        </div>
      </div>

      <div className="skill-set-containers">
        <div className="skill">
          <h3 className="skill-name">React.js</h3>
          <Progress
            type="circle"
            percent={100}
            width={180}
            theme={{
              active: {
                symbol: "🙌",
                color: color,
                trailColor: trailColor
              },
              success: {
                symbol: "💪",
                color: color,
                trailColor: trailColor
              }
            }}
          />
        </div>
        <div className="skill">
          <h3 className="skill-name">HTML</h3>
          <Progress
            type="circle"
            percent={100}
            width={180}
            theme={{
              active: {
                symbol: "🙌",
                color: color,
                trailColor: trailColor
              },
              success: {
                symbol: "💪",
                color: color,
                trailColor: trailColor
              }
            }}
          />
        </div>
        <div className="skill">
          <h3 className="skill-name">Javascript</h3>
          <Progress
            type="circle"
            percent={95}
            width={180}
            theme={{
              active: {
                symbol: "🙌",
                color: color,
                trailColor: trailColor
              }
            }}
          />
        </div>
        <div className="skill">
          <h3 className="skill-name">CSS</h3>
          <Progress
            type="circle"
            percent={100}
            width={180}
            theme={{
              active: {
                symbol: "🙌",
                color: color,
                trailColor: trailColor
              },
              success: {
                symbol: "💪",
                color: color,
                trailColor: trailColor
              }
            }}
          />
        </div>
        <div className="skill">
          <h3 className="skill-name">Redux</h3>
          <Progress
            type="circle"
            percent={80}
            width={180}
            theme={{
              active: {
                symbol: "🙌",
                color: color,
                trailColor: trailColor
              }
            }}
          />
        </div>
        <div className="skill">
          <h3 className="skill-name">React Native</h3>
          <Progress
            type="circle"
            percent={88}
            width={180}
            theme={{
              active: {
                symbol: "🙌",
                color: color,
                trailColor: trailColor
              }
            }}
          />
        </div>
        <div className="skill">
          <h3 className="skill-name">Vue.js</h3>
          <Progress
            type="circle"
            percent={75}
            width={180}
            theme={{
              active: {
                symbol: "😎",
                color: color,
                trailColor: trailColor
              }
            }}
          />
        </div>
        <div className="skill">
          <h3 className="skill-name">Angular.js</h3>
          <Progress
            type="circle"
            percent={75}
            width={180}
            theme={{
              active: {
                symbol: "😎",
                color: color,
                trailColor: trailColor
              }
            }}
          />
        </div>
        <div className="skill">
          <h3 className="skill-name">Node.js</h3>
          <Progress
            type="circle"
            percent={85}
            width={180}
            theme={{
              active: {
                symbol: "🙌",
                color: color,
                trailColor: trailColor
              }
            }}
          />
        </div>
        <div className="skill">
          <h3 className="skill-name">SQL</h3>
          <Progress
            type="circle"
            percent={90}
            width={180}
            theme={{
              active: {
                symbol: "🙌",
                color: color,
                trailColor: trailColor
              }
            }}
          />
        </div>
      </div>

      <div className="break">
        <img src={angel} alt="projects-break" className="angel" />
        <div className="break-title-left">
          <h1>Did I Mention I'm An Illustrator As Well?</h1>
          <p>
            Art is my first passion and being an illustrator was the first
            professional job I started working. Here's a couple of some of my
            favorite pieces! Hope you like them too!
          </p>
        </div>
      </div>

      <div className="art-container">
        {artArray.map(art => (
          <img src={art.artImg} alt="artwork" className="artwork" />
        ))}
      </div>

      <ScrollableAnchor id={"contact"}>
        <div className="contact">
          <div className="break-title-center">
            <h1>LIKE WHAT YOU SEE? I'M ONLY ONE MESSAGE AWAY!</h1>
            <p>
              I AM ALWAYS READY TO JOIN AN ENERGETIC AND AWESOME TEAM THAT CAN
              SPLIT CHALLENGES AND SHARE WINS! LET'S DO THIS!
            </p>
            <a
              href="mailto:javontay.r.mcelroy@gmail.com"
              className="contact-btn"
            >
              Contact Me
            </a>
          </div>
        </div>
      </ScrollableAnchor>

      <div className="social-links">
        <a
          href="https://github.com/javontaymcelroy"
          target="_blank"
          className="link-wrap"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" className="social-icon" />
        </a>
        <a
          href="https://instagram.com/thekingmuze"
          target="_blank"
          className="link-wrap"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" className="social-icon" />
        </a>
        <a
          href="https://twitter.com/thekingmuze"
          target="_blank"
          className="link-wrap"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" className="social-icon" />
        </a>
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
  );
};

export default Home;
