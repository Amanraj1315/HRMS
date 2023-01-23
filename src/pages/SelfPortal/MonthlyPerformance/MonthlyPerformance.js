import React from "react";
import Form from "./Form";
import classes from "./MonthlyPerformance.module.css";
function MonthlyPerformance() {
  return (
    <div>
      <div className="h1 ">Employee Details</div>
      <div className={classes.outer}>
        <p className="d-flex flex-left mx-1">MonthlyPerformance</p>
        <Form />
      </div>
    </div>
  );
}

export default MonthlyPerformance;
