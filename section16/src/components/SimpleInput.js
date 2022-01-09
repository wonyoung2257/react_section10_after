import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNametouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHanbler = (event) => {
    setEnteredNametouched(true);
  };

  const formSubmitissonHandler = (e) => {
    e.preventDefault();

    setEnteredNametouched(true);
    console.log(enteredNameIsValid);
    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNametouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitissonHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHanbler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">이름은 공백이 안됩니다.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
