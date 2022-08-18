import React from "react";
import "./Navigation.styles.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";

export default function Navigation() {
  const [navScrolled, setNavScrolled] = React.useState(false);

  React.useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 80) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  });

  return (
    <nav
      className={`nav navbar navbar-expand-md ${
        !navScrolled ? "unscrolled" : ""
      }`}
      aria-label="Portfolio Navigation"
    >
      <div className="container-fluid container-md px-md-4">
        <Link
          activeClass="section-active"
          className="nav-initials ms-2"
          to="hero"
          spy={true}
          smooth={true}
          duration={0}
        >
          AM<span className="nav-initials-dot">.</span>
        </Link>
        <button
          type="button"
          className="btn d-md-none nav-btn"
          data-bs-toggle="modal"
          data-bs-target="#navbar-modal"
        >
          <MenuIcon></MenuIcon>
        </button>

        <div className="collapse navbar-collapse text-center" id="navbar">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link
                activeClass="section-active"
                className="nav-link"
                to="hero"
                spy={true}
                smooth={true}
                duration={0}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="section-active"
                className="nav-link"
                to="projects"
                spy={true}
                smooth={true}
                duration={0}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="section-active"
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                duration={0}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="section-active"
                className="nav-link"
                to="playground"
                spy={true}
                smooth={true}
                duration={0}
              >
                Playground
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="section-active"
                className="nav-link"
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
    </nav>
  );
}
