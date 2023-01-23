import React, { Component } from "react";

import classes from './SignIn.module.css'
class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className={classes.formCenter}>
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className={classes.formField}>
            <label className={classes.formFieldLabel} htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className={classes.formFieldInput}
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className={classes.formField}>
            <label className={classes.formFieldLabel} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={classes.formFieldInput}
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className={classes.formField}>
            <label className={classes.formFieldLabel} htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className={classes.formFieldInput}
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className={classes.formField}>
            <label className={classes.formFieldCheckboxLabel}>
              <input
                className={classes.formFieldCheckbox}
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className={classes.formFieldTermsLink}>
                terms of service
              </a>
            </label>
          </div>

          <div className={classes.formField}>
            <button className={classes.formFieldButton}>Sign Up</button>{" "}
            
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;