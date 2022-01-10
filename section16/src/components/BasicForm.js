import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameValid && lastNameValid && emailValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("sumbitted");
    resetEmail();
    resetFirstName();
    resetLastName();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />
          {firstNameHasError && <p>first name 똑바로 입력</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {lastNameHasError && <p>last name 똑바로 입력</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailHasError && <p>email 똑바로 입력</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
