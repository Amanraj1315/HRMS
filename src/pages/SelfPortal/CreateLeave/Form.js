
import React, { useEffect, useState } from "react";

function Form() {
  const url = "";
  const [show,setShow]=useState([]);
  const [data, setData] = useState({
    employee: "",
    approver: "",
    leave_type: "",
    available_balance: "",
    leave_for: "",
    start_date: "",
    end_date: "",
    days: "",
    reason_for_leave: "",
  });
  function handleInput(e) {
    e.preventDefault();
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    
  }
  // const fetchData1 = () =>{
  //   fetch("http://localhost:8080/basic/fetchdata",{
  //   })
  //   .then((response) =>{
  //     return response.json();
  //   })
  //   .then((data) =>{
  //     setShow(data)
  //   })
  // }
  // useEffect(()=>{
  //   fetchData1();
  // })
  
  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch('http://localhost:8080/basic/fetchdata')
    const data = await response.json();
    console.log(data);
    setShow(data);
}
fetchData();
}, []);
  const submitHandler=(e)=>{
    e.preventDefault();
    // console.log(JSON.stringify(data));
    // axios
    //   .post(url, {
    //     employee: data.employee,
    //     approver: data.appprover,
    //     leave_type: data.leave_type,
    //     available_balance: data.available_balance,
    //     leave_for: data.leave_for,
    //     start_date: data.start_date,
    //     end_date: data.end_date,
    //     days: data.days,
    //     reason_for_leave: data.reason_for_leave,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    fetch("http://localhost:8080/CreateLeaveRequest/post",{
      method:"POST",
      headers:{"Content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("Create Leave Accepted")

    })
  };
  const employee = [
    { value: "", text: "Radha", disabled: true },
    { value: "apple", text: "Apple 🍏" },
    { value: "banana", text: "Banana 🍌" },
    { value: "kiwi", text: "Kiwi 🥝" },
  ];
  // const approver = [
  //   { value: "", text: "Administrator", disabled: true },
  //   { value: "apple", text: "Apple 🍏" },
  //   { value: "banana", text: "Banana 🍌" },
  //   { value: "kiwi", text: "Kiwi 🥝" },
  // ];
  const leaveType = [
    { value: "", text: "Choose Leave Type", disabled: false },
    { value: "casual", text: "Casual Leave" },
    { value: "sick", text: "Sick Leave" },
    { value: "annual", text: "Annual Leave" },
  ];
  // const leaveFor = [
  //   { value: "", text: "Choose Leave For", disabled: true },
  //   { value: "apple", text: "Apple 🍏" },
  //   { value: "banana", text: "Banana 🍌" },
  //   { value: "kiwi", text: "Kiwi 🥝" },
  // ];
  // const [selectedEmployee, setSelectedEmployee] = useState("");
  // const [selectedApprover, setSelectedApprover] = useState("");
  // const [selectedLeaveType, setSelectedLeaveType] = useState("");
  // const [selectedLeaveFor, setSelectedLeaveFor] = useState("");

  // const handleChangeEmployee = (event) => {
  //   setSelectedEmployee(event.target.value);
  // };
  // const handleChangeApprover = (event) => {
  //   setSelectedApprover(event.target.value);
  // };
  // const handleChangeLeaveType = (event) => {
  //   setSelectedLeaveType(event.target.value);
  // };
  // const handleChangeLeaveFor = (event) => {
  //   setSelectedLeaveFor(event.target.value);
  // };
  return (
    <form onSubmit={submitHandler} className=" ">
      <p className="h4 py-2">Create Leave Request</p>
      <div className="row mb-1 d-flex justify-content-evenly">
        <div className="col-sm-5 mx-1">
          <label for="formFile" className="form-label">
            Select Employee:
          </label>
          <br />
          
          <select
            className="form-select form-select-lg mb-1 w-75"
            value={data.selectEmployee}
            onChange={handleInput}
            name="selectEmployee"
          >
            {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
            {/* {employee.map((option) => (
              <option
                disabled={option.disabled}
                key={option.value}
                value={option.value}
              >
                {option.text}
              </option>
              
            ))} */}
          </select>
          
        </div>
        <div className="col-sm-5 mx-2">
          <label for="formFile" className="form-label">
            Leave Approver:
          </label>
          <br />

          <select
            className="form-select form-select-lg mb-1 w-75"
            value={data.leaveApprover}
            name="leaveApprover"
            onChange={handleInput}
          >
            {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
            {/* {approver.map((option) => (
              <option
                disabled={option.disabled}
                key={option.value}
                value={option.value}
              >
                {option.text}
              </option>
            ))} */}
          </select>
        </div>
      </div>
      <div className="row mb-1 d-flex justify-content-evenly">
        <div className="col-sm-5 w-50">
          <label for="formFile" className="form-label">
            Leave Type:
          </label>
          <br />

          <select
            className="form-select form-select-lg mb-1 w-75"
            value={data.leaveType}
            onChange={handleInput}
            name="leaveType"
          >
            {leaveType.map((option) => (
              <option
                disabled={option.disabled}
                key={option.value}
                value={option.value}
              >
                {option.text}
              </option>
            ))}
          </select>
        </div>
        {/* <div className="col-sm-5 mx-2">
          <label for="formFile" className="form-label">
            Available Balance:
          </label>
          <br />
          <input
          className="form-control"
            type="number"
            name="availableBalance"
            onChange={handleInput}
            value={data.availableBalance}
          />
        </div> */}
      </div>
      {/* <div className=" row mb-1 mx-4 ">
        <label for="formFile" className="form-label">
          Leave For:
        </label>
        <br />

        <select
          className="form-select form-control col-sm-10 mb-1 w-100 "
          value={data.leaveFor}
          onChange={handleInput}
          name="leaveFor"
        >
          {leaveFor.map((option) => (
            <option
              disabled={option.disabled}
              key={option.value}
              value={option.value}
            >
              {option.text}
            </option>
          ))}
        </select>
      </div> */}
      <div className=" row mb-1 d-flex justify-content-around ">
        <div className="col">
          <label for="exampleFormControlInput1" className="form-label ">
            Start Date:
          </label>
          <input
            name="startDate"
            onChange={handleInput}
            value={data.startDate}
            type="Date"
            className="form-control"
            id="Choose Type"
          />
        </div>
        <div className="col">
          <label for="exampleFormControlInput1" className="form-label ">
            End Date:
          </label>
          <input
            name="endDate"
            onChange={handleInput}
            value={data.endDate}
            type="Date"
            className="form-control"
            id="Choose Type"
          />
        </div>
        <div className="col">
          {" "}
          <label for="formFile" className="form-label">
            Days:
          </label>
          <br />
          <input
          className='form-control w-50'
            name="days"
            onChange={handleInput}
            value={data.days}
            type="number"
          />
        </div>
      </div>
      <div className="row d-flex flex-column">
        <label for="exampleInputEmail1" className="form-label mx-5">
          Reason for Leave
        </label>
        <textarea
          name="reasonForLeave"
          onChange={handleInput}
          value={data.reasonForLeave}
          type="text"
          className="form-control col-10 mx-5  w-75"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mt-2 mx-5">
        <button onClick={submitHandler} className="btn btn-outline-primary px-5 btn-lg mb-2 mx-2">
          Submit
        </button>
        <button className="btn btn-outline-danger px-5 btn-lg mb-2">
          Back
        </button>
      </div>
    </form>
  );
}

export default Form;
