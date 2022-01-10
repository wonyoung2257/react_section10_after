import { useState } from "react";
/**
 * [x] 유저의 입력 값을 받아온다
 * [x] 유저가 submit 했을 때 입력값이 조건에 맞지 않으면 에러를 띄운다.
 * [] 입력을 아무것도 하지 않은 상태에서 에러가 나오는 것 수정하기
 *
 */

const BasicForm = (props) => {
  const [enteredFName, setEnteredFName] = useState("");
  const [fNameInputTouched, setFNameInputTouched] = useState(false);

  const fNameIsValid = enteredFName.trim() !== "";

  const FNameHasError = !fNameIsValid && fNameInputTouched;

  const enteredFNameChangeHandler = (event) => {
    setEnteredFName(event.target.value);
  };

  const fNameBlurHandler = () => {
    setFNameInputTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFNameInputTouched(true);
    if (!fNameIsValid) {
      return;
    }
    setFNameInputTouched(false);
    setEnteredFName("");
  };

  const fNameInputClasses = FNameHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFName}
            onChange={enteredFNameChangeHandler}
            onBlur={fNameBlurHandler}
          />
          {FNameHasError && (
            <p className="error-text">이름값은 공백이 안됩니다.</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
