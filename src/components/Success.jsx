import React from "react";

const Success = (props) => {
  return (
    <div>
      <div className="container">
        <h1>ThankYou {props.formValues.name}</h1>
        <br />
        <h3>We have received your information and we will contact you soon</h3>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.clearForm}
      >
        Home
      </button>
    </div>
  );
};

export default Success;
