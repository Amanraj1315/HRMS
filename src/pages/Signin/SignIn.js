import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ahom from "../Signin/ahom.png";
import classes from "./SignIn.module.css";
import SignInForm from "./SignInForm";

function SignIn(props) {
  // const [loggedIn, SetLoggedIn] = useState(false);
  const [dataInput, setDataInput] = useState(null);
  const navigate = useNavigate();
  const handlerInput = (val) => {
    setDataInput(val);
  };

  // const logInHandler = () => {
  //   navigate("/Dashboard");
  // };

  const logInHandler = async (e) => {
    console.log(JSON.stringify(dataInput));
    fetch("http://localhost:8080/usermaster/authenticate", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dataInput),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data.jwtToken);
          if (data.jwtToken) {
            sessionStorage.setItem("token", JSON.stringify(data.jwtToken));
            navigate("/Dashboard");
          }
        }
      })
      .catch((err) => console.log(err));
  };
  // const token = localStorage.getItem("token");

  return (
    <div className={classes.body}>
      <div className={classes.saurabh}>
        <div className={classes.appForm}>
          <div className={classes.logo}>
            <img src={ahom} alt="logo" />
          </div>

          {/* <div className={classes.formTitle}>
            <p className={classes.formTitleLink} onClick={logInHandler}>
              Sign In
            </p>
          </div> */}
          {
            <SignInForm
              onClick={logInHandler}
              handlerInput={handlerInput}
              handler={props.handler}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default SignIn;
