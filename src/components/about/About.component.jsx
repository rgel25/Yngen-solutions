import React from "react";
import "./About.styles.scss";
import { ReactComponent as AboutSVG } from "../../assets/images/undraw_developer_activity_re_39tg.svg";
import { skills } from "../../data/skills.data";
import CertificationsModal from "../certifications-modal/CertificationsModal.component";

export default function About() {
  return (
    <div className="container-fluid position-relative overflow-hidden">
      <img
        className="about-path2"
        src={require("../../assets/images/path2.png")}
        alt=""
      />
      <img
        className="about-shapes about-triangle"
        src={require("../../assets/images/triunghiuri.webp")}
        alt=""
      />

      <img
        className="about-shapes about-squares"
        src={require("../../assets/images/patrat.webp")}
        alt=""
      />
      <img
        className="about-shapes about-circles"
        src={require("../../assets/images/cercuri.webp")}
        alt=""
      />
      <div
        id="about"
        className="about-container container d-flex flex-column justify-content-center align-items-center position-relative min-vh-100 pt-5 mt-5"
      >
        <div className="row mx-1 g-5">
          <div className="col-12 col-md-6">
            <div data-aos="zoom-in-right" data-aos-once className="row mb-3">
              <h3 className="display-5 text-orange p-0">About Me</h3>
            </div>
            <div
              data-aos="zoom-in-right"
              data-aos-once
              className="row mb-3 mb-md-4"
            >
              <AboutSVG className="img-fluid w-50 m-auto" />
            </div>
            <div data-aos="zoom-in-right" data-aos-once className="row mb-3">
              I'm a solution-oriented full-stack web developer who thrives in
              fast-paced working environments. I am experienced in developing
              powerful and responsive web applications using modern
              technologies, libraries and frameworks. I'm also a great
              communicator, a highly collaborative team player, a self-starter,
              and I have an absurd amount of passion in learning new
              technologies.
            </div>
            <div data-aos="zoom-in-right" data-aos-once className="row mb-3">
              I am a KodeGo Coding Bootcamp graduate. I learned a plethora of
              skills in the bootcamp but I'd say the highlight of this learning
              experience is I got to lead a small team (three, including myself)
              of developers (my batchmates) and successfully implemented the
              AGILE methodology in two of our projects.
            </div>
            <div className="row">
              {/* https://drive.google.com/file/d/1Yz-1-qpRB9CjJMf6Ski34bG_gp8EC-DS/view?usp=sharing */}
              <div className="col-12 p-0">
                <div
                  data-aos="zoom-in-right"
                  data-aos-once
                  className="d-grid d-md-inline me-md-2 p-0"
                >
                  <a
                    className="btn btn-blue mb-2 mb-md-0 about-btn"
                    href="https://drive.google.com/file/d/1KE345b5-fGmOAkanDTVUgQfugQqxKtxw/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-file-earmark-person"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
                    </svg>
                    Download CV
                  </a>
                </div>
                <div
                  data-aos="zoom-in-right"
                  data-aos-once
                  data-aos-delay="200"
                  className="d-grid d-md-inline me-md-2 p-0"
                >
                  <a
                    className="btn btn-green mb-2 mb-md-0 about-btn"
                    href="https://github.com/rgel25"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    GitHub
                  </a>
                </div>
                <div
                  data-aos="zoom-in-right"
                  data-aos-once
                  data-aos-delay="400"
                  className="d-grid d-md-inline p-0"
                >
                  <button
                    className="btn btn-pink about-btn mt-0 mt-md-2 mt-xl-0"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#certificationsModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-award"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                      <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                    </svg>
                    Certifications
                  </button>
                </div>
              </div>
              <CertificationsModal />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <h3
                data-aos="zoom-in-left"
                data-aos-once
                className="display-5 text-orange p-0"
              >
                My Skills
              </h3>
            </div>
            <div className="row p-0 m-auto">
              <div className="row m-auto">
                <div
                  data-aos="zoom-in-left"
                  data-aos-once
                  className="col p-0 mb-1"
                >
                  <h3 className="text-center p-0 mt-1">
                    Frontend Technologies
                  </h3>
                </div>
              </div>
              <div className="row m-auto p-0 justify-content-center">
                {skills.frontEnd.map((skill, i) => {
                  return (
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once
                      data-aos-delay={`${i * 100 + 100}`}
                      className="tech-card-fe col-4 col-lg-3 m-0 p-0 text-center "
                      key={i}
                    >
                      <div
                        className="tech-card-fe-img-wrapper m-auto"
                        style={{ width: "60%" }}
                      >
                        <img
                          src={require(`../../assets/images/${skill.toLocaleLowerCase()}.png`)}
                          alt={skill}
                          className="img-fluid m-auto"
                        />
                      </div>
                      <p className="text-center text-blue fw-bold">{skill}</p>
                    </div>
                  );
                })}
              </div>
              <div className="row m-auto">
                <div
                  data-aos="zoom-in-left"
                  data-aos-once
                  className="col p-0 mb-1"
                >
                  <h3 className="text-center p-0 mt-1">Backend Technologies</h3>
                </div>
              </div>
              <div className="row m-auto p-0 justify-content-center">
                {skills.backEnd.map((skill, i) => {
                  return (
                    <div
                      data-aos="zoom-in-left"
                      data-aos-delay={`${i * 100 + 100}`}
                      data-aos-once
                      className="tech-card-be col-4 col-lg-3 p-0 m-0 text-center"
                      key={i}
                    >
                      <div
                        className="tech-card-be-img-wrapper  m-auto"
                        style={{ width: "60%" }}
                      >
                        <img
                          src={require(`../../assets/images/${skill.toLocaleLowerCase()}.png`)}
                          alt={skill}
                          className="img-fluid m-auto"
                        />
                      </div>
                      <p className="text-center text-green fw-bold">{skill}</p>
                    </div>
                  );
                })}
              </div>
              <div className="row m-auto">
                <div className="col p-0 mb-1">
                  <h3 className="text-center p-0 mt-1">Developer Tools</h3>
                </div>
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-once
                className="row m-auto p-0 justify-content-center"
              >
                {skills.devTools.map((skill, i) => {
                  return (
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once
                      data-aos-delay={`${i * 100 + 100}`}
                      className="tech-card-dt col-4 col-lg-3 m-0 p-0 text-center"
                      key={i}
                    >
                      <div
                        className="tech-card-dt-img-wrapper  m-auto"
                        style={{ width: "60%" }}
                      >
                        <img
                          src={require(`../../assets/images/${skill.toLocaleLowerCase()}.png`)}
                          alt={skill}
                          className="img-fluid m-auto"
                        />
                      </div>
                      <p className="text-center text-pink fw-bold">{skill}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
