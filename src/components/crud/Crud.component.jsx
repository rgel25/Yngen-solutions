import React from "react";

export default function Crud() {
  React.useEffect(() => {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
      "use strict";

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll(".needs-validation");

      // Loop over them and prevent submission
      Array.from(forms).forEach((form) => {
        form.addEventListener(
          "submit",
          (event) => {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  }, []);

  const database = [];
  const [db, setDb] = React.useState(database);
  const [nameForm, setNameForm] = React.useState("");
  const [searchForm, setSearchForm] = React.useState("");
  const [searchResult, setSearchResult] = React.useState("");

  function addData(value) {
    setDb((prevDb) => [...prevDb, value]);
  }

  function deleteData(value) {
    setDb((prevDb) => prevDb.filter((dog, i) => i !== value));
  }

  function updateData(valueToBeReplaced, newValue) {
    setDb((prevDb) => {
      const clonePrevDb = [...prevDb];
      clonePrevDb[valueToBeReplaced] = newValue;
      return clonePrevDb;
    });
  }

  function getData(value) {
    const match = db.find((name) => name === value);
    if (match) return setSearchResult(match);
    setSearchResult("No result found");
  }

  function getAllData() {
    return db;
  }

  const addNameHandler = (e) => {
    e.preventDefault();
    addData(nameForm);
    e.target.classList.remove("was-validated");
    setNameForm("");
  };

  const addNameChangeHandler = (e) => {
    const { value } = e.target;
    setNameForm(value);
  };

  const handleEditSubmit = (i, editData) => {
    updateData(i, [...editData.entries()][0][1]);
  };

  const handleDelete = (i) => {
    if (window.confirm("Are you sure you want to delete this name?"))
      deleteData(i);
  };

  const searchChangeHandler = (e) => {
    const { value } = e.target;
    setSearchForm(value);
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    getData(searchForm);
    e.target.classList.remove("was-validated");
    setSearchForm("");
  };

  return (
    <div className="min-vh-100 p-0 p-md-5 align-items-center justify-content-center flex-column text-center">
      <h2 className="text-orange my-3">Mini CRUD App (Dog Names)</h2>
      <div className="row">
        <div className="col-12 col-md-6">
          <h3 className="my-3 text-pink">Add a dog name!</h3>
          <div className="container px-5">
            <form
              noValidate
              className="needs-validation"
              onSubmit={addNameHandler}
            >
              <div className="mb-3 col-md-6 offset-md-3">
                <label htmlFor="dog-name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="dog-name"
                  value={nameForm}
                  name="name"
                  onChange={addNameChangeHandler}
                />
              </div>
              <button type="submit" className="btn btn-orange fw-bold">
                Submit
              </button>
            </form>
          </div>
          <h3 className="mt-5 mb-0 text-pink">Search for a dog!</h3>
          <h5 className="mb-3 text-muted">Exact match only</h5>
          <div className="container px-5">
            <form
              noValidate
              className="needs-validation mb-5"
              onSubmit={searchSubmitHandler}
            >
              <div className="mb-3 col-md-6 offset-md-3">
                <label htmlFor="search-dog-name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="search-dog-name"
                  value={searchForm}
                  name="name"
                  onChange={searchChangeHandler}
                />
              </div>
              <button type="submit" className="btn btn-orange fw-bold">
                Submit
              </button>
            </form>
            {searchResult}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h3 className="my-3 text-pink">Dog Names</h3>
          <ul className="list-group">
            {getAllData().map((dog, i) => {
              return (
                <li
                  key={i}
                  className="list-group-item d-flex align-items-center"
                >
                  <div className="me-auto">{dog}</div>
                  <div className="justify-self-end">
                    <button
                      className="btn btn-success mx-1"
                      data-bs-toggle="modal"
                      data-bs-target={`#edit-modal-${i}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(i)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-x-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </button>
                  </div>
                  {/* EDIT MODAL */}
                  <div
                    className="modal fade"
                    id={`edit-modal-${i}`}
                    tabIndex="-1"
                    aria-labelledby={`edit-modal-${i}Label`}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content bg-dark-blue text-white">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id={`edit-modal-${i}Label`}
                          >
                            Edit Dog #{i + 1} - {dog}
                          </h5>
                          <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            const editData = new FormData(e.target);
                            handleEditSubmit(i, editData);
                          }}
                        >
                          <div className="modal-body">
                            <div className="mb-3 col-md-6 offset-md-3">
                              <label htmlFor="dog-name" className="form-label">
                                New dog name
                              </label>
                              <input
                                type="text"
                                required
                                className="form-control"
                                id="dog-name"
                                name="name"
                                defaultValue={dog}
                              />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                            >
                              Save changes
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* END OF EDIT MODAL */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="row">
        <h2 className="text-orange my-3">Mini CRUD App (Solution)</h2>
        <div className="col-12">
          <img
            src={require(`../../assets/images/solpart41.PNG`)}
            alt="crud solution"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
