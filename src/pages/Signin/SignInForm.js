import React, { Component } from "react";
import classes from "./SignIn.module.css";
class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      nameError: "",
      passwordError: "",
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.handler(this.state);
  //   this.props.handlerInput(this.state);
  //   this.props.onClick();
  //   console.log("The form was submitted with the following data:");
  //   console.log(this.state);
  // }

  handleUserChange(e) {
    // let target = event.target;
    // let value = target.type === "checkbox" ? target.checked : target.value;
    // let name = target.name;

    this.setState({
      // [name]: value,
      userName: e.target.value,
      // password: e.target.value,
    });
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  valid() {
    if (
      this.state.userName.includes("ahom") &&
      this.state.password.length > 2
    ) {
      this.setState({
        nameError: "Either UserName or Password is wrong",
      });
    } else if (
      this.state.userName.includes("ahom") ||
      !this.state.password.length > 2
    ) {
      this.setState({
        passwordError: "password Wrong",
      });
    } else if (
      !this.state.userName.includes("ahom") ||
      this.state.password.length > 2
    ) {
      this.setState({
        nameError: "User Invalid",
      });
    } else {
      this.setState({
        nameError: "user wrong",
        passwordError: "password wrong",
      });
    }
    // else if (
    //   this.state.userName.includes("ahom") &&
    //   !this.state.password.length > 2
    // ) {
    //   this.setState({

    //     passwordError: "Password Incorrect",
    //   });
    // }
  }
  handleSubmit(e) {
    this.setState({ nameError: "", passwordError: "" });
    e.preventDefault();
    this.props.handler(this.state);
    this.props.handlerInput(this.state);
    this.props.onClick();
    console.log("The form was submitted with the following data:");
    console.log(this.state);

    if (this.valid()) {
      alert("user Login");
    }
  }

  render() {
    return (
      <div className={classes.formCenter}>
        <form
          className={classes.formField}
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div className={classes.formField}>
            <label className={classes.formFieldLabel} htmlFor="userName">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              className={classes.formFieldInput}
              placeholder="Username..."
              name="username"
              value={this.state.userName}
              onChange={(e) => {
                this.handleUserChange(e);
              }}
            />
          </div>
          {this.state.nameError}

          <div className={classes.formField}>
            <label className={classes.formFieldLabel} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={classes.formFieldInput}
              placeholder=" Password..."
              name="password"
              value={this.state.password}
              onChange={(e) => {
                this.handlePasswordChange(e);
              }}
            />
          </div>
          {this.state.passwordError}

          <div className={classes.formField}>
            <button
              // onClick={this.handleSubmit}
              className={classes.formFieldButton}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
