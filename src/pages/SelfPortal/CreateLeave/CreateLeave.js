import React from "react";

import CalenderForm from "./CalenderForm";
// import classes from "./CreateLeave.module.css";
import Form from "./Form";

function CreateLeave() {
  return (
    <div style={{maxWidth:'80%',marginLeft:'5%'}}>
      <div className= "text-start mx-1 h1">Leave Request</div>
      <div  className="d-flex justify-content-center row">
        <div className='card col-md-6 mx-1'>
          <Form />
        </div>
        <div className='col-md-5'>
          <CalenderForm />
        </div>
      </div>
    </div>
  );
}

export default CreateLeave;
