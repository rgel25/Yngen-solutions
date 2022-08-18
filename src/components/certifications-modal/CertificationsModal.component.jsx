import React from "react";
import "./CertificationsModal.styles.scss";

export default function CertificationsModal() {
  return (
    <div
      className="modal fade"
      id="certificationsModal"
      tabIndex="-1"
      aria-labelledby="certificationsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" id="certificationsModalBody">
          <div className="modal-header">
            <h5
              className="modal-title display-6 text-orange"
              id="certificationsModalLabel"
            >
              Certifications
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div
              id="certificationsCarouselIndicator"
              className="carousel carousel-dark slide"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#certificationsCarouselIndicator"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#certificationsCarouselIndicator"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#certificationsCarouselIndicator"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <a
                    href="https://drive.google.com/file/d/1--7tJvdOhxUj7f2cAZAadhkv5UJ1mgNw/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../assets/images/kodego.png")}
                      className="d-block w-100"
                      alt="KodeGo Certification"
                    />
                  </a>
                </div>
                <div className="carousel-item">
                  <a
                    href="https://drive.google.com/file/d/1wvNFjP1EEhvHho2ulliji_VOEhAFA7zm/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../assets/images/colt.jpg")}
                      className="d-block w-100"
                      alt="Udemy Certification by Colt Steele"
                    />
                  </a>
                </div>
                <div className="carousel-item">
                  <a
                    href="https://drive.google.com/file/d/14e9Jnt3eJkUKlTn_5AOqK7fy5B5ZYpHd/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require("../../assets/images/jonas.jpg")}
                      className="d-block w-100"
                      alt="Udemy Certification by Jason Schmedtmann"
                    />
                  </a>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#certificationsCarouselIndicator"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#certificationsCarouselIndicator"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="modal-footer">
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
  );
}
