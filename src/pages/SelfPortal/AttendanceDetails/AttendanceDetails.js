import React, { useEffect } from "react";
import Form from "./Form";
import classes from "./AttendanceDetail.module.css";
function AttendanceDetail() {
  
  return (
    <div>
      <div className="display-4 mt-2">Attendance Details</div>
      <div className={classes.outer}>
        <Form />
      </div>
    </div>
  );
}

export default AttendanceDetail
