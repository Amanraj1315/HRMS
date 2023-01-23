import { useState,useEffect } from "react";
  const LeaveReport = () => {
  const [data,setData]=useState({
    Session:'',
    Month:'',
    ChooseEmoloyee:''


  });
  const [show, setShow] = useState([]);
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
    
 }
 const submitHandler=(e)=>{
  console.log(JSON.stringify(data))
 }
 const fetchData = () => {
  fetch("http://localhost:8080/basic/fetchdata", {
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setShow(data)
    })
}
useEffect(() => {
    fetchData();
  }, [])

  return <>
  <div className="container">
    <h4>Leave Report</h4>
    <hr className="col -sm-90" />
    <div className="bg-light">
    <div className="row -sm-30 ">
      
      
    <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Session:</label>
       <br/>  
   <select value={data.session} class="form-select" aria-label="Default select example" name="session" onChange={inputChangeHandler}>
    <option selected disabled>Select Year</option>
    <option value="2020-2021">2020-2021</option>
    <option value="2021-2022">2021-2022</option>
    <option value="2022-2023">2022-2023</option>
    <option value="2023-2024">2023-2024</option>
    <option value="2024-2025">2024-2025</option>
  </select>
  </div>
  
  <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Month:</label>
       <br/>  
       <select value={data.month} class="form-select" aria-label="Default select example" name="month" onChange={inputChangeHandler}>
    <option selected disabled>Select Month</option>
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="aman">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="Octuber">Octuber</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>
  </div>

  <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Choose Emoloyee:</label>
       <br/>  
       <select value={data.Chooseemployee} class="form-select" aria-label="Default select example" name="Chooseemployee" onChange={inputChangeHandler}>
    <option selected disabled>Choose Emoloyee</option>
    {show.map(aman=>( <option valueType={aman.employeeName}>{aman.employeeName}</option>))}
    {/* <option value="aman">Aman</option>
    <option value="amit">Amit</option>
    <option value="ranjan">Ranjan</option>
    <option value="saurav">Saurav</option> */}
  </select>
  </div>

  </div>

  <button onClick={submitHandler} className="btn btn-primary mt-4">Search</button>
  </div>
  </div>
  </>
  }
  
  export default LeaveReport;