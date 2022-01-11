import { useState } from "react";
import useChekout from "../../hooks/use-checkout";
import classes from "./Checkout.module.css";

const valueClasses = (hasError) => {
  return hasError ? `${classes.control} ${classes.invalid}` : classes.control;
};

const Checkout = (props) => {
  const {
    value: name,
    valid: nameValid,
    hasError: nameHasError,
    valueBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: resetName,
  } = useChekout((value) => value.trim() !== "");
  const {
    value: street,
    valid: streetValid,
    hasError: streetHasError,
    valueBlurHandler: streetBlurHandler,
    valueChangeHandler: streetChangeHandler,
    reset: resetStreet,
  } = useChekout((value) => value.trim() !== "");
  const {
    value: postal,
    valid: postalValid,
    hasError: postalHasError,
    valueBlurHandler: postalBlurHandler,
    valueChangeHandler: postalChangeHandler,
    reset: resetPostal,
  } = useChekout((value) => value.trim() !== "");
  const {
    value: city,
    valid: cityValid,
    hasError: cityHasError,
    valueBlurHandler: cityBlurHandler,
    valueChangeHandler: cityChangeHandler,
    reset: resetCity,
  } = useChekout((value) => value.trim() !== "");

  const formIsValied = nameValid && streetValid && postalValid && cityValid;

  const confirmHandler = (event) => {
    event.preventDefault();
    if (!formIsValied) {
      return;
    }
    resetName();
    resetStreet();
    resetPostal();
    resetCity();
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={valueClasses(nameHasError)}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p className={classes.error}>값을 입력해주세요</p>}
      </div>
      <div className={valueClasses(streetHasError)}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && <p className={classes.error}>값을 입력해주세요</p>}
      </div>
      <div className={valueClasses(postalHasError)}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={postal}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
        />
        {postalHasError && <p className={classes.error}>값을 입력해주세요</p>}
      </div>
      <div className={valueClasses(cityHasError)}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && <p className={classes.error}>값을 입력해주세요</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
