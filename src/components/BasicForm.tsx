import useInput from "./hooks/UseInput";


const BasicForm = () => {
  const validatorname = (value: string) => value.trim() !== "";
  const validatoremail = (value: string) => value.includes("@");
  //firstname
  const {
    value: firstNameInput,
    valueChangeHandler: firstNameChangeHandler,
    inputblurHandler: firstNameBlurHandler,
    haserror: firstNameInputError,
    valueisvalid: firstNameIsValid,
    resetValues: resetFirstName,
  } = useInput({ validator: validatorname });

  //lastname
  const {
    value: lastNameInput,
    valueChangeHandler: lastNameChangeHandler,
    inputblurHandler: lastNameBlurHandler,
    haserror: lastNameInputError,
    valueisvalid: lastNameIsValid,
    resetValues: resetLastName,
  } = useInput({ validator: validatorname });

  //email
  const {
    value: emailInput,
    valueChangeHandler: emailChangeHandler,
    inputblurHandler: emailBlurHandler,
    haserror: emailInputError,
    valueisvalid: emailIsValid,
    resetValues: resetEmail,
  } = useInput({ validator: validatoremail });

  const submitHandler = (event: React.FormEvent) => {
    if (!formIsValid) {
      return;
    }
    event.preventDefault();
    resetFirstName();
    resetLastName();
    resetEmail();
    console.log("Submitted");
  };

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameInputError && "invalid"}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameInput}
            onBlur={firstNameBlurHandler}
            onChange={firstNameChangeHandler}
          />
          {firstNameInputError && (
            <p className="error-text">Please enter a valid name</p>
          )}
        </div>

        <div className={`form-control ${lastNameInputError && "invalid"}`}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameInput}
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
          />
          {lastNameInputError && (
            <p className="error-text">Please enter a valid name</p>
          )}
        </div>
      </div>

      <div className={`form-control ${emailInputError && "invalid"}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailInput}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailInputError && (
          <p className="error-text">Please enter a valid name</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
