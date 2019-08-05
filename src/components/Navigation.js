import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

import "../App.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="general-links">
        <img src={logo} alt={logo} className="logo" />
      </Link>
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
