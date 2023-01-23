import { CFormCheck } from "@coreui/bootstrap-react";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classes from './Form.module.css'
function Form() {
  
  const [data, setData] = useState({
    description: "",
   
  });
  const[show,setShow]=useState([]);
  function handleInput(e) {
    e.preventDefault();
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    console.log(JSON.stringify(newdata));
  }
  const fetchData1 = () =>{
    fetch("http://localhost:8080/basic/fetchdata",{
    })
    .then((response) =>{
      return response.json();
    })
    .then((data) =>{
      setShow(data)
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post( {
        description: data.description,
        radio: data.radio,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  fetch("http://localhost:8080/MonthlyPerformance",{
    method:"POST",
    headers:{"Content-Type":"application/json","Accept":"application/json"},
    body:JSON.stringify(data)
  }).then(()=>{
    console.log("Monthly Performance Accepted")

  })
  return (
    <div className={classes.outer}>
      <div className="d-flex justify-content-around ">
        <div className=" " style={{ fontSize: "1.2vw" }}>
          <div className="d-flex pb-4 mx-1">
            <div className="px-5 ">Employee Id :</div>
            {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
            <div className="px-5">0</div>
          </div>
          <div className="d-flex mx-1 pb-4">
            <div className="px-5">Department </div>
            <div className="px-4">IT Department</div>
          </div>
          <div className="d-flex pb-4 mx-1">
            <div className=" mx-5">Report Auth :</div>
            <div className="px-5">0</div>
          </div>
          <div className="d-flex pb-4 mx-5">
            <div className="px-1 ">Reporting Month :</div>
            <div className="px-4">Oct</div>
          </div>
        </div>
        <div className="" style={{ fontSize: "1.2vw" }}>
          <div className="d-flex mx-4 pb-4">
            <div className="px-5">Name :</div>
            <div className="px-5">Administrator</div>
          </div>
          <div className="d-flex mx-4 pb-4">
            <div className="px-5">Designation :</div>
            <div className="px-1">Administrator</div>
          </div>
          <div className="d-flex mx-4 pb-4">
            <div className="px-5">Date of joining:</div>
            <div className="">
              <input type="date" />
            </div>
          </div>
          <div className="d-flex mx-5 pb-4">
            <div className="px-5">Reporting Time :</div>
            <div className="px-5">2</div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="d-flex flex-left mx-5">
          Additional Assignment Details if any
        </h5>
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-around mt-3"
        >
          <div>
            <label for="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              name="description"
              onChange={handleInput}
              value={data.description}
              className="form-control w-40 "
              id="exampleFormControlTextarea1"
              rows="2"
              columns="9"
            ></textarea>
          </div>
          <div>
            <label>Status</label>
            <CFormCheck
              onChange={handleInput}
              value="Under Progress"
              type="radio"
              name="Status"
              id="flexRadioDefault1"
              label="Under Progress"
            />
            <CFormCheck
              onChange={handleInput}
              value="Completed"
              type="radio"
              name="Status"
              id="flexRadioDefault2"
              label="Completed"
              defaultChecked
            />
          </div>
          <div>
            <Button>ADD</Button>
          </div>
        </form>
        <div className="mt-3 pb-1">
          <button className="btn btn-outline-primary mx-3">Save</button>
          <button className="btn btn-outline-danger">Back</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
