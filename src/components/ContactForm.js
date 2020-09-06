import React, { useState } from "react";
import { useValidationInput, FormStates } from "../utills/use-validation-input";

function ContactForm() {
  const {
    input,
    setInput,
    validate,
    error,
    formState,
    formIsValid,
  } = useValidationInput({
    values: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    rules: {
      name: ["required", "max:20", "min:3", "characterOnly"],
      phone: ["required", "max:11", "min:11", "numberOnly"],
      email: ["required", "email"],
      message: ["required"],
    },
  });
  const [messageSent, setMessageSent] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    formIsValid && setLoading(true); 

    setTimeout(() => {
      if (formIsValid) {
        setMessageSent(true);
        setInput({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <form
      className="php-email-form"
      onKeyUp={() => formState === FormStates.Touched && validate()}
      onSubmit={handleSubmit}
    >
      {messageSent && (
        <div className="alert alert-success">Your Message Has Been Sent</div>
      )}
      <div className="form-row">
        <div className="col-md-6 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
          <small className="text-danger">{error.name}</small>
        </div>
        <div className="col-md-6 form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <small className="text-danger">{error.email}</small>
        </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Phone"
          value={input.phone}
          onChange={(e) => setInput({ ...input, phone: e.target.value })}
          maxLength={11}
        />
        <small className="text-danger">{error.phone}</small>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          rows="5"
          placeholder="Message"
          value={input.message}
          onChange={(e) => setInput({ ...input, message: e.target.value })}
        ></textarea>
        <small className="text-danger">{error.message}</small>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className={loading ? "bg-dark" : ""}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
