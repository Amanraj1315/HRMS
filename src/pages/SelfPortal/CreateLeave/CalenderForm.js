import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
function CalenderForm() {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div>
      {/* <Calendar
        className="w-100 py-5 my-1 "
        onChange={onChange}
        value={date}
      /> */}
    </div>
  );
}

export default CalenderForm;
