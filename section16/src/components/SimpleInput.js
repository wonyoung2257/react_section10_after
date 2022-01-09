import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNametouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@");

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    // 전체 폼을 검사하는 로직을 추가하면 된다.
    //useEffect를 사용했었는데 사이트이펙트가 발생하지 않아 구지 필요하지 않다.
    formIsValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const nameInputBlurHanbler = (event) => {
    setEnteredNametouched(true);
  };

  const emailInputBlurHanbler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmitissonHandler = (e) => {
    e.preventDefault();

    setEnteredNametouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    } else if (!enteredEmailIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNametouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsValid
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
      <div className={emailInputClasses}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHanbler}
          value={enteredEmail}
        />
        {emailInputIsValid && (
          <p className="error-text">email형식을 입력해주세요</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
