import React from "react";
import "./Modal.scss";

import x from "../assets/images/x.svg";

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal">
        <div className="links">
          <a
            href="https://www.linkedin.com/in/javontay-mcelroy-663b81bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-links"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/javontaymcelroy"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-links"
          >
            Github
          </a>
          <a
            href="https://www.behance.net/javontay"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-links"
          >
            Behance.net
          </a>
          <a
            href="https://instagram.com/thekingmuze"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-links"
          >
            Instagram
          </a>
          <img
            src={x}
            className="close-btn"
            onClick={handleClose}
            alt="close"
          />
          {/* <h1 onClick={handleClose} className="close-btn modal-links">
            Close
          </h1> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
