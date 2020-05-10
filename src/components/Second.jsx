import React from "react";

const Second = (props) => {
  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4" style={{ marginTop: "5%" }}>
        <form>
          <label>Email</label>
          <br />
          <input
            name="email"
            type="email"
            placeholder="email"
            value={props.formValues.email}
            onChange={(e) => props.formValues.setEmail(e.target.value)}
          />
          <br />
          <label>Mobile</label>
          <br />
          <input
            name="mobile"
            type="text"
            placeholder="mobile"
            value={props.formValues.mobile}
            onChange={(e) => props.formValues.setMobile(e.target.value)}
          />
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
            Next
          </button>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default Second;
