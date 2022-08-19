import React from "react";

export default function Intro() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center flex-column text-center">
      <h1>
        Hi, <span className="text-orange">Yngen</span>!
      </h1>
      <p className="fs-4">
        Thanks for your kind consideration. Please scroll down below for my
        solution to the technical interview.
      </p>
      <p className="fs-4">
        Please note that I already have a
        <a
          className="text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
          href="https://argelmiralles.netlify.app/"
        >
          <span className="text-blue"> portfolio </span>
        </a>
        in React so I decided to use it here.
      </p>
      <p className="fs-4">
        <span className="fw-bold">
          Personal Information and Work Experience
        </span>{" "}
        can be found in the<span className="fw-bold"> “Download CV” </span>
        button of the About Me section
      </p>
      <p className="fs-4">
        Contact (REQRES) solution can be found after the Contact page of the
        portfolio.
      </p>
    </div>
  );
}
