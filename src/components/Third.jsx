import React from "react";

const Third = (props) => {
  return (
    <div className="container">
      <div>
        <h2>Please verify Details</h2>
        <br />
        First Name &nbsp; {props.formValues.name}
        <br />
        Last Name &nbsp; {props.formValues.surname}
        <br />
        Email &nbsp; {props.formValues.email}
        <br />
        Mobile &nbsp; {props.formValues.mobile}
        <br />
      </div>
      <br />
      <br />
      <button
        type="button"
        className="btn btn-secondary"
        onClick={props.formValues.handlePrevious}
      >
        Previous
      </button>
      &nbsp;&nbsp;
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.formValues.handleNext}
      >
        Submit
      </button>
    </div>
  );
};

export default Third;
