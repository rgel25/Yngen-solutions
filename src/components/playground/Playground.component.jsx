import React from "react";
import "./Playground.styles.scss";
import playgroundProjects from "../../data/project-playground-data";
import Pagination from "./Pagination";
import PlayGroundProjectModal from "./PlayGroundProjectModal.component";

export default function Playground() {
  const [projects] = React.useState(playgroundProjects);

  const projectsCount = projects.length;
  const reactCount = projects.filter((p) => p.tag === "react").length;
  const jsCount = projects.filter((p) => p.tag === "javascript").length;
  const htmlCount = projects.filter((p) => p.tag === "htmlcss").length;

  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [projectsPerPage] = React.useState(4);

  const handleFilter = (e) => {
    const filterSelected = e.target;
    const filterKey = filterSelected.dataset.filterkey;
    const filterButtons = document.querySelectorAll(".filter");
    // Handle active class
    filterButtons.forEach((btn) => {
      if (btn.dataset.filterkey !== filterKey) {
        btn.classList.remove("btn-filter-active");
      } else {
        btn.classList.add("btn-filter-active");
      }
    });
    if (filterKey === "all") return setFilteredProjects(projects);
    // set Filter state
    setFilteredProjects(() => {
      return projects.filter((project) => project.tag === filterKey);
    });

    // Reset page
    setCurrentPage(1);
  };

  //   Pagination start
  // Pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Change page
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handlePreviousPage() {
    if (currentPage <= 1) return;
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
  }

  function handleNextPage(pageNumber) {
    if (currentPage >= pageNumber) return;
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  }

  const projectElements = currentProjects.map((project, i) => {
    return (
      <PlayGroundProjectModal key={project.id} project={project} i={i} />
      // <div className="col-3">
      //   <button
      //     key={project.id}
      //     type="button"
      //     className="btn btn-primary"
      //     data-bs-toggle="modal"
      //     data-bs-target="#exampleModal"
      //   >
      //     {project.name}
      //   </button>
      // </div>
    );
  });

  return (
    <div className="container-fluid position-relative overflow-hidden">
      <img
        className="playground-path"
        src={require("../../assets/images/path.png")}
        alt=""
      />
      <img
        className="playground-path2"
        src={require("../../assets/images/path2.png")}
        alt=""
      />
      <img
        className="playground-shapes playground-squares "
        src={require("../../assets/images/patrat.webp")}
        alt=""
      />
      <img
        className="playground-shapes playground-circles d-none d-md-block"
        src={require("../../assets/images/cercuri.webp")}
        alt=""
      />
      <div
        id="projects"
        className="projects-container container d-flex flex-column justify-content-center align-items-center position-relative"
      >
        <div
          data-aos="zoom-in-down"
          data-aos-once
          className="projects-header text-center playground-projects-header"
        >
          <h2 className="display-4 text-orange fw-bold">Playground</h2>
          <p>
            A collection of the smaller projects I've created. Pick a card below
            to see more details about a project.
          </p>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-once
          className="container text-center"
        >
          <button
            className="filter btn btn-orange btn-sm btn-filter-active me-2 mb-2"
            onClick={handleFilter}
            data-filterkey="all"
          >
            All ({projectsCount})
          </button>
          <button
            className="filter btn btn-orange btn-sm me-2 mb-2"
            onClick={handleFilter}
            data-filterkey="react"
          >
            React ({reactCount})
          </button>
          <button
            className="filter btn btn-orange btn-sm me-2 mb-2"
            onClick={handleFilter}
            data-filterkey="javascript"
          >
            JavaScript ({jsCount})
          </button>
          <button
            className="filter btn btn-orange btn-sm mb-2"
            onClick={handleFilter}
            data-filterkey="htmlcss"
          >
            HTML and CSS ({htmlCount})
          </button>
        </div>
        <div className="row container-fluid">{projectElements}</div>
        <div className="row">
          <Pagination
            projectsPerPage={projectsPerPage}
            totalProjects={filteredProjects.length}
            paginate={paginate}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}
