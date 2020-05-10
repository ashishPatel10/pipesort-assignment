import React, { useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Success from "./Success";
const Form = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    //if (!(step == 0 && (name == "" || surname == ""))) {
    if (
      (formValues.name === "" ||
        formValues.surname === "" ||
        formValues.email === "" ||
        formValues.mobile === "") &&
      formValues.step === 2
    ) {
      setStep(step - 2);
    } else {
      setStep(step + 1);
    }

    //}
  };
  const handlePrevious = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };
  const clearForm = (e) => {
    e.preventDefault();
    setStep(0);
    setName("");
    setSurname("");
    setEmail("");
    setMobile("");
  };
  const formValues = {
    name,
    setName,
    surname,
    setSurname,
    email,
    setEmail,
    mobile,
    setMobile,
    handlePrevious,
    handleNext,
    setStep,
    step,
  };
  //console.log(step);
  const showPage = () => {
    switch (step) {
      case 0:
        return <First formValues={formValues} />;
      case 1:
        return <Second formValues={formValues} />;
      case 2:
        return <Third formValues={formValues} />;
      case 3:
        return <Success formValues={formValues} clearForm={clearForm} />;
      default:
        return null;
    }
  };
  return <div>{showPage()}</div>;
};

export default Form;
