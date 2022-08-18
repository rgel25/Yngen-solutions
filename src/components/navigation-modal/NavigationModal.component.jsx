import React from "react";
import "./NavigationModal.styles.scss";
import { Link } from "react-scroll";

export default function NavigationModal() {
  return (
    <div
      className="modal fade"
      id="navbar-modal"
      tabIndex="-1"
      aria-labelledby="navbar-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content nav-modal-card">
          <div className="container-fluid px-3 pt-3 d-flex justify-content-end">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-0">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0 text-center">
              <li className="nav-modal-item" data-bs-dismiss="modal">
                <Link
                  activeClass="section-active"
                  className="nav-modal-link"
                  to="hero"
                  spy={true}
                  smooth={true}
                  duration={0}
                >
                  Home
                </Link>
              </li>
              <li className="nav-modal-item" data-bs-dismiss="modal">
                <Link
                  activeClass="section-active"
                  className="nav-modal-link"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={0}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-modal-item" data-bs-dismiss="modal">
                <Link
                  activeClass="section-active"
                  className="nav-modal-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={0}
                >
                  About
                </Link>
              </li>
              <li className="nav-modal-item" data-bs-dismiss="modal">
                <Link
                  activeClass="section-active"
                  className="nav-modal-link"
                  to="playground"
                  spy={true}
                  smooth={true}
                  duration={0}
                >
                  Playground
                </Link>
              </li>
              <li className="nav-modal-item" data-bs-dismiss="modal">
                <Link
                  activeClass="section-active"
                  className="nav-modal-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={0}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
