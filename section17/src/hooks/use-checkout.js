import { useState } from "react";

const useChekout = (checkValidFnc) => {
  const [value, setValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);

  const valueValid = checkValidFnc(value);
  const valueHasError = valueTouched && !valueValid;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setValueTouched(true);
  };

  const reset = () => {
    setValueTouched(false);
    setValue("");
  };

  return {
    value,
    valid: valueValid,
    hasError: valueHasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useChekout;
