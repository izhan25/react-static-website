import React from "react";
import { isEmpty } from "./object-is-empty";

export const FormStates = Object.freeze({
  Untouched: "Untouched",
  Touched: "Touched",
});

export function useValidationInput({ values, rules }) {
  const [input, setInput] = React.useState(values);
  const [error, setError] = React.useState({});
  const [formState, setFormState] = React.useState(FormStates.Untouched);
  const [formIsValid, setFormIsValid] = React.useState();

  const validate = () => {
    setFormState(FormStates.Touched);
    let errors = {};

    for (let key in input) {
      const inputRules = rules[key];
      const _input = input[key];
      let _errors = errors;

      inputRules.forEach((rule) => {
        // required
        if (rule === "required") {
          if (_input === "" || !_input) {
            _errors = { ..._errors, [key]: "Required" };
          }
        }

        // max
        if (rule.includes("max")) {
          const maxLength = rule.split(":")[1];
          if (_input.length > maxLength) {
            _errors = {
              ..._errors,
              [key]: `Must not be longer than ${maxLength} characters`,
            };
          }
        }

        // min
        if (rule.includes("min")) {
          const minLength = rule.split(":")[1];
          if (_input.length < minLength) {
            _errors = {
              ..._errors,
              [key]: `Must not be less than ${minLength} characters`,
            };
          }
        }

        // characters only
        if (rule === "characterOnly") {
          const regx = new RegExp("^[a-zA-Z]*$");
          _input.split(" ").forEach((i) => {
            if (!regx.test(i)) {
              _errors = { ..._errors, [key]: "Must not contain digits" };
            }
          });
        }

        // number only
        if (rule === "numberOnly") {
          const regx = new RegExp("^[0-9]+$");
          if (!regx.test(_input)) {
            _errors = { ..._errors, [key]: "Must only contain digits" };
          }
        }

        // email
        if (rule === "email") {
          const regx = new RegExp(
            "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
          );
          if (!regx.test(_input)) {
            _errors = { ..._errors, [key]: "Invalid email address" };
          }
        }
      });

      errors = _errors;

      if (isEmpty(_errors)) {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    }

    setError(errors);
    // console.log(errors);
  };

  return { input, setInput, validate, error, formState, formIsValid };
}
