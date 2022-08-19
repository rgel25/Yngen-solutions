import React from "react";

export default function ProblemTwo() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <h2 className="my-3 text-orange display-5">JavaScript Problems</h2>
      <div className="col-12 text-wrap text-center p-3">
        <h2 className="mb-5 fs-5 text-wrap mx-auto">
          Codepen link:{" "}
          <a
            href="https://codepen.io/rgel25/pen/QWmzmdm"
            target="_blank"
            rel="noreferrer noopener"
            className="fs-5 text-wrap text-break"
          >
            https://codepen.io/rgel25/pen/QWmzmdm
          </a>
        </h2>
      </div>
      <div className="row w-100">
        <div className="col-12 col-md-6 text-center bg-white">
          <img
            src={require(`../../assets/images/jsproblem.PNG`)}
            alt="Javascript problems"
            className="img-fluid mx-auto"
          />
        </div>
        <div className="col-12 col-md-6 text-center">
          <img
            src={require(`../../assets/images/jssolution.PNG`)}
            alt="Javascript problems"
            className="img-fluid mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
