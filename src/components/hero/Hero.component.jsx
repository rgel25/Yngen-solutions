import React from "react";
import { ReactComponent as HeroSVG } from "../../assets/images/undraw_firmware_re_fgdy.svg";
import "./Hero.styles.scss";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div className="d-flex justify-content-center align-items-center position-relative hero-container">
      <img
        className="path"
        src={require("../../assets/images/path.png")}
        alt=""
      />
      <img
        className="path2"
        src={require("../../assets/images/path2.png")}
        alt=""
      />
      <img
        className="shapes triangle"
        src={require("../../assets/images/triunghiuri.webp")}
        alt=""
      />
      <img
        className="shapes wave"
        src={require("../../assets/images/waves.webp")}
        alt=""
      />
      <img
        className="shapes squares"
        src={require("../../assets/images/patrat.webp")}
        alt=""
      />
      <img
        className="shapes circles"
        src={require("../../assets/images/cercuri.webp")}
        alt=""
      />
      <div
        data-aos="zoom-in-down"
        data-aos-once
        className="container col-xxl-8 px-4 py-5"
      >
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 m-auto">
            <HeroSVG
              className="d-block mx-lg-auto img-fluid hero-svg"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-5 fw-bold lh-2 mb-3">
              Hi, I'm Argel and I'm a{" "}
              <span className="header">Full Stack Web Developer</span>
            </h1>
            <p className="lead">
              I build <span className="font-bold-italic">powerful</span> and
              <span className="font-bold-italic"> responsive </span>
              web applications using modern workflows and technologies.
            </p>
            <div className="d-grid gap-2 d-lg-flex justify-content-lg-start">
              <Link
                type="button"
                className="btn btn-orange btn-lg px-4 me-md-2 fw-bold"
                activeClass="section-active"
                to="projects"
                spy={true}
                smooth={true}
                duration={0}
              >
                See my work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
