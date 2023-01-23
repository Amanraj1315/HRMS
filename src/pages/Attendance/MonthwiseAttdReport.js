import { useEffect, useState } from "react";
const DatewiseAttendaceReport = () => {
  const [employee,setEmployee]=useState('');
  const [fromDate,setFromDate]=useState('');
  const [toDate,setToDate]=useState('');
  const [show, setShow] = useState([]);

 const submitHandler=(e)=>{
    e.preventDefault();
    const values={employee:employee,fromDate:fromDate,toDate:toDate}
    console.log(JSON.stringify(values))
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
    <h4>Datewise Attendance Report</h4>
    <hr className="100%" />
    <form onSubmit={submitHandler} className="bg-light">
   
    <div className="row ">
      
      
    <div className="col-sm-4 mt-1">
         <label for="cars" id='label'>Select Employee:</label>
       <br/>  
       <select valueType={employee} class="form-select" aria-label="Default select example" name="selectemployee" onChange={(e)=>{setEmployee(e.target.value)}}>
    <option selected disabled>Select Employee</option>
    {show.map(aman=>( <option valueType={aman.employeeName}>{aman.employeeName}</option>))}
    {/* <option valueType="aman">Aman</option>
    <option valueType="amit">Amit</option>
    <option valueType="ranjan">Ranjan</option>
    <option valueType="saurav">Saurav</option> */}
  </select>
  </div>
  
   <div className="col-sm-4">

   <label  class="form-label"> From Date :</label><br/>
    <input value={fromDate} type="date" class="form-control" id="formGroupExampleInput" name="fromdate"  onChange={(e)=>{setFromDate(e.target.value)}}/>
  </div>
  <div className="col-sm-4">
    <label  class="form-label">To Date:</label><br/>
    <input value={toDate} type="date" class="form-control" id="formGroupExampleInput" name="toDate"  onChange={(e)=>{setToDate(e.target.value)}}/>
  </div>
  </div>
  <button type="submit" class="btn btn-primary mt-4">Save</button>
  </form>
  </div>
  </>
  }
  
  export default DatewiseAttendaceReport;