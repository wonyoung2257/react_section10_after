import useBasicInput from "../hooks/use-basic-input";
/**
 * [x] 유저의 입력 값을 받아온다
 * [x] 유저가 submit 했을 때 입력값이 조건에 맞지 않으면 에러를 띄운다.
 * [] 입력을 아무것도 하지 않은 상태에서 에러가 나오는 것 수정하기
 *
 */

const BasicForm = (props) => {
  const {
    value: enteredFName,
    hasError: FNameHasError,
    inputChangeHandler: enteredFNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    valueInputClasses: firstNameInputClasses,
    reset: firstNameReset,
    valueIsValid: fNameIsValid,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: LastNameHasError,
    inputChangeHandler: enteredLastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    valueInputClasses: lastNameInputClasses,
    reset: lastNameReset,
    valueIsValid: lastNameIsValid,
  } = useBasicInput((value) => value.trim() !== "");

  let isFormValid = false;

  if (fNameIsValid && lastNameIsValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }
    lastNameReset();
    firstNameReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
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
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={enteredLastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {LastNameHasError && (
            <p className="error-text">이름값은 공백이 안됩니다.</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
