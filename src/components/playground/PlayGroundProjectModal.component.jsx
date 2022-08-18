import React from "react";

import { Fade } from "react-awesome-reveal";

export default function PlayGroundProjectModal(props) {
  const { id, name, techStack, description, tag, url, githubUrl } =
    props.project;
  const tagFormatter = (tag) => {
    if (tag === "react") return "React";
    if (tag === "javascript") return "JavaScript";
    if (tag === "htmlcss") return "HTML/CSS";
  };

  return (
    <div className="col-6 col-md-3 my-3">
      <Fade delay={props.i * 150} triggerOnce="true">
        <div
          className={`card playground-project-card card-${tag}`}
          data-bs-toggle="modal"
          data-bs-target={`#min-project-${id}-modal`}
        >
          <img
            src={require(`../../assets/images/card-${tag}.png`)}
            alt={name}
          />
          <div className="card-overlay p-0">
            <p className="fs-4 fw-bold m-0">{name}</p>
            <p className="fs-6 m-0 fst-italic">{`<${tagFormatter(tag)}>`}</p>
          </div>
        </div>
      </Fade>
      <div
        className="modal fade"
        id={`min-project-${id}-modal`}
        tabIndex="-1"
        aria-labelledby={`min-project-${id}-modalLabel`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content playground-project-modal-content">
            <div className="modal-header playground-project-header">
              <div className="d-flex flex-column">
                <h5
                  className="modal-title fs-2 text-orange"
                  id={`min-project-${id}-modalLabel`}
                >
                  {name}
                </h5>
                <h5 className="fs-6">{techStack}</h5>
              </div>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <img
                src={require(`../../assets/images/pp-${id}.png`)}
                className="img-fluid"
                alt={name}
              />
            </div>
            <div className="modal-body">{description}</div>
            <div className="modal-footer">
              <a
                href={url}
                className="btn btn-pink"
                // eslint-disable-next-line
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-box-arrow-up-left"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"
                  />
                </svg>
                Demo Website
              </a>
              <a
                href={githubUrl}
                target="_blank"
                className="btn btn-green"
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
                View Github
              </a>
              <button
                type="button"
                className="btn btn-blue"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
