import useInput from "./hooks/UseInput";
import useInputReducer from "./hooks/UseInputReducer";

const SimpleInput = () => {

const validatorname = (value: string) =>  value.trim() !== "";
//custom hook 
const {
    value:enteredname,
    haserror:nameinputerror,
    valueisvalid:nameisvalid,
    resetValues:resetname,
    valueChangeHandler:namechangedhandler,
    inputblurHandler:nameblurhandler 
 } = useInput({validator:validatorname});

 ///use reducer hook
 const validatoremail= (value: string) => value.includes("@");
  const {
    value:enteredemail,
    haserror:emailinputerror,
    valueisvalid:emailisvalid,
    resetValues:resetemail,
    valueChangeHandler:emailchangedhandler,
    inputblurHandler:emailblurhandler 
 } = useInputReducer({validator:validatoremail});

 let formisvaild = false;
 if(nameisvalid && emailisvalid ){
   formisvaild = true;
 }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(enteredname);
    console.log(enteredemail);
    resetname();
    resetemail();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className= {`form-control ${nameinputerror &&'invalid'}`}>
        <label htmlFor="name">{enteredname}</label>
        <input
          type="text"
          id="name"
          placeholder="name"
          onBlur={nameblurhandler}
          onChange={namechangedhandler}
          value={enteredname}
        />
      </div>
      {nameinputerror && <p className="error-text">Sorry error name</p>}
     
      <div className= {`form-control ${emailinputerror &&'invalid'}`}>
        <label htmlFor="email">{enteredemail.value}</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          onBlur={emailblurhandler}
          onChange={emailchangedhandler}
          value={enteredemail.value}
        />
      </div>
      {emailinputerror && <p className="error-text">Sorry error email</p>}
      
      <div className="form-actions">
        <button disabled = {!formisvaild}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
