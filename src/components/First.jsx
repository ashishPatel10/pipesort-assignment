import React from "react";
const First = (props) => {
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4" style={{ marginTop: "5%" }}>
        <form>
          <label>First Name</label>
          <br />
          <input
            name="name"
            type="text"
            placeholder="name"
            value={props.formValues.name}
            onChange={(e) => props.formValues.setName(e.target.value)}
          />
          <br />
          <label>Last Name</label>
          <br />
          <input
            name="surname"
            type="text"
            placeholder="surname"
            value={props.formValues.surname}
            onChange={(e) => props.formValues.setSurname(e.target.value)}
          />
          <br />
          <br />
          <button
            type="button"
            className="btn btn-secondary"
            onClick={props.formValues.handlePrevious}
            disabled
          >
            Previous
          </button>
          &nbsp;&nbsp;
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.formValues.handleNext}
          >
            Next
          </button>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default First;
