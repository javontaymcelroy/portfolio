import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal.js";

import logo from "../assets/images/logo.png";

import "../App.scss";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="navigation">
        <Link to="/" className="general-links">
          <img src={logo} alt={logo} className="logo" />
        </Link>
        <h1 className="nav-title">Welcome to my Portfolio</h1>
        <Modal show={this.state.show} handleClose={this.hideModal} />
        <div className="mobile-nav" onClick={this.showModal}>
          <span className="top-mobile" />
          <span className="middle-mobile" />
          <span className="bottom-mobile" />
        </div>
      </div>
    );
  }
}

export default Navigation;
