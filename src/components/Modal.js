import React from "react";
import "./Modal.scss";

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
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/javontaymcelroy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.behance.net/javontay"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance.net
          </a>
          <a
            href="https://instagram.com/thekingmuze"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a type="button" onClick={handleClose} className="close-btn">
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
