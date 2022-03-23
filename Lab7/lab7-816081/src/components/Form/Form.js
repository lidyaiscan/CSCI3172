import './Form.css';
import Profile from '../Profile/Profile';
import { useState } from 'react';

function Form() {

  // Retrieve the values of each input element
  var [firstNameValue, setFirstName] = useState("");
  var [lastNameValue, setLastName] = useState("");
  var [emailValue, setEmail] = useState("");
  var [passwordValue, setPassword] = useState("");
  var [seasonValue, setSeason] = useState("");

  var [isValidated, setValidation] = useState(false);

  // Function for input validation
  function onClick(firstNameValue, lastNameValue, emailValue, passwordValue, seasonValue) {

    // Create validation regular expressions to check against input
    const firstNameRegEx = new RegExp(/^[a-zA-Z]+$/);
    const lastNameRegEx = new RegExp(/^[a-zA-Z]+$/);
    const emailRegEx = new RegExp(/^[a-zA-Z0-9.-]+@([a-zA-Z0-9-]+.)+[a-z]{2,6}$/);
    const passwordRegEx = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?]).{4,}$/);

    if (!firstNameRegEx.test(firstNameValue)) {
      document.getElementById('firstNameError').style.display = "block";
    } else if (!lastNameRegEx.test(lastNameValue)) {
      document.getElementById('lastNameError').style.display = "block";
    } else if (!emailRegEx.test(emailValue)) {
      document.getElementById('emailError').style.display = "block";
    } else if (!passwordRegEx.test(passwordValue)) {
      document.getElementById('passwordError').style.display = "block";
    } else if (seasonValue === "") {
      document.getElementById('seasonError').style.display = "block";
    }
    else {
      setValidation(true);
    }

  }

  return (

    !isValidated ? (
      <div className="App">
        <div className="form">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={(event) => setFirstName(event.target.value)}></input>
          <div className="error" id="firstNameError">
            <span>There are some errors in your First Name</span>
          </div>
          <br></br>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={(event) => setLastName(event.target.value)}></input>
          <div className="error" id="lastNameError">
            <span>There are some errors in your Last Name</span>
          </div>
          <br></br>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" onChange={(event) => setEmail(event.target.value)}></input>
          <div className="error" id="emailError">
            <span>There are some errors in your Error</span>
          </div>
          <br></br>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" onChange={(event) => setPassword(event.target.value)}></input>
          <div className="error" id="passwordError">
            <span>There are some errors in your Password</span>
          </div>
          <br></br>
          <label htmlFor="season">Favourite Season</label>
          <br></br>
          <select id="season" onChange={(event) => setSeason(event.target.value)}>
            <option defaultValue=""></option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
          <div className="error" id="seasonError">
            <span>You have not selected a valid season</span>
          </div>
          <br></br>
          <button
            type="submit"
            id="submit"
            onClick={() => onClick(firstNameValue, lastNameValue, emailValue, passwordValue, seasonValue)}
          >Submit</button>
        </div>
      </div>
    ) : (
      <Profile firstNameValue={firstNameValue} lastNameValue={lastNameValue} emailValue={emailValue} seasonValue={seasonValue}/>
    )
  );
}

export default Form;
