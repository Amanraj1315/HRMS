import React from "react";
import Form from "./Form";
import classes from "./RaiseGrievance.module.css";
function RaiseGrievance() {
  return (
    <div>
    <p className="h2 mt-4">Raise Grievance</p>
    <div className={classes.outer}>
    
      <Form />
    </div>
    </div>
  );
}

export default RaiseGrievance;
