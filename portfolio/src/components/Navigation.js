import React from "react";
import logo from "../assets/images/logo.png";

import "../App.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src={logo} alt={logo} className="logo" />
      <h1 className="nav-title">Welcome to my Portfolio</h1>
      <div className="mobile-nav">
        <span className="top-mobile" />
        <span className="middle-mobile" />
        <span className="bottom-mobile" />
      </div>
    </div>
  );
};

export default Navigation;
