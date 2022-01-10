import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHanbler,
    reset: resetNameInput,
    //매개변수로 넘겨지는 화살표 함수는 외부에서 실행되지 않고 함수내에서 호출되어 함수 처럼 사용됨
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHanbler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    // 전체 폼을 검사하는 로직을 추가하면 된다.
    //useEffect를 사용했었는데 사이트이펙트가 발생하지 않아 구지 필요하지 않다.
    formIsValid = true;
  }

  const formSubmitissonHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    } else if (!enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitissonHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHanbler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">이름은 공백이 안됩니다.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHanbler}
          value={enteredEmail}
        />
        {emailInputHasError && (
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
