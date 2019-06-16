// ===================== DEPENDANCIES / COMPONENTS  ===================== //
import React from "react";
import { Component } from "react";
import Navigation from "./components/Navigation";

// ===================== ASSETS ===================== //
import heroImg from "./assets/images/hold_up.png";
// ===================== STYLES ===================== //
import "./App.scss";

// ===================== COMPONENT ===================== //
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="hero-content">
          <h1 className="hero-title">JAVONTAY McELROY</h1>
          <h6 className="hero-caption">
            Full Stack Web Developer | UI / UX Designer
          </h6>
        </div>
        <div className="hero-image-container">
          <img src={heroImg} className="hero-image" alt="hero" />
          <button className="white-btn">See my Projects</button>
        </div>
        <div className="scroll-down-container">
          <h1 className="scroll-down">Scroll down</h1>
          <span className="scroll-line" />
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
  }
}

export default App;
