import { useState } from "react";

const useBasicInput = (checkValueIsValid) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const valueIsValid = checkValueIsValid(enteredValue);

  const hasError = !valueIsValid && inputIsTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setInputIsTouched(false);
  };

  const valueInputClasses = hasError ? "form-control invalid" : "form-control";

  return {
    value: enteredValue,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    valueInputClasses,
    valueIsValid,
    reset,
  };
};

export default useBasicInput;
