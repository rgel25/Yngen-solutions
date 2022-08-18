import React from "react";
import ProjectCard from "../project-card/ProjectCard.component";
import "./Projects.styles.scss";
import ProjectsData from "../../data/project-data";

export default function Projects() {
  return (
    <div className="container-fluid position-relative overflow-hidden">
      <img
        className="projects-path"
        src={require("../../assets/images/path.png")}
        alt=""
      />
      <img
        className="projects-path2"
        src={require("../../assets/images/path2.png")}
        alt=""
      />
      <img
        className="projects-shapes projects-triangle"
        src={require("../../assets/images/triunghiuri.webp")}
        alt=""
      />
      <img
        className="projects-shapes projects-wave d-none d-md-block"
        src={require("../../assets/images/waves.webp")}
        alt=""
      />
      <img
        className="projects-shapes projects-squares"
        src={require("../../assets/images/patrat.webp")}
        alt=""
      />
      <img
        className="projects-shapes projects-circles"
        src={require("../../assets/images/cercuri.webp")}
        alt=""
      />
      <div
        id="projects"
        className="projects-container container d-flex flex-column justify-content-center align-items-center position-relative"
      >
        <div
          data-aos="zoom-in-up"
          data-aos-once
          className="projects-header text-center mb-5"
        >
          <h2 className="display-4 text-orange fw-bold">Featured Projects</h2>
          <p>
            A collection of the best web applications I've made. Pick a card
            below to see more details about a project.
          </p>
        </div>
        <div className="row g-4">
          {ProjectsData.map((project) => {
            return (
              <div className="col-6 col-lg-3" key={project.id}>
                <ProjectCard
                  project={project}
                  imageSrc={require(`../../assets/images/project-${project.id}.png`)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
