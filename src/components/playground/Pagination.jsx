import React from "react";

export default function Pagination({
  projectsPerPage,
  totalProjects,
  paginate,
  handlePreviousPage,
  handleNextPage,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageNumbersElements = pageNumbers.map((num) => {
    return (
      <li
        className={`page-item ${num === currentPage ? "active" : ""}`}
        href="!#"
        key={num}
        onClick={(e) => {
          e.preventDefault();
          paginate(num);
        }}
      >
        <a className="page-link" href="!#">
          {num}
        </a>
      </li>
    );
  });

  return (
    <>
      {pageNumbers.length > 1 ? (
        <nav
          data-aos="zoom-in-down"
          data-aos-once
          aria-label="..."
          className="p-2"
        >
          <ul className="pagination pagination-sm" id="pagination">
            <li
              className={`page-item ${
                currentPage >= 2 ? "" : "disabled pagination-muted"
              }`}
              onClick={handlePreviousPage}
            >
              <button className="page-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-left-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </button>
            </li>
            {pageNumbersElements}
            <li
              className={`page-item ${
                currentPage >= pageNumbers.length
                  ? "disabled pagination-muted"
                  : ""
              }`}
              onClick={() => handleNextPage(pageNumbers.length)}
            >
              <button className="page-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}
