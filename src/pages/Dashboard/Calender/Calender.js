import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import classes from "./Cal.module.css";
function Calender() {
  return (
    <Calendar
      className={classes.calender}
      // style={{display:"flex", flexWrap:"nowrap"}}
    />
  );
}

export default Calender;
