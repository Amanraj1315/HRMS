import { useEffect, useState } from "react";
// import { propTypes } from "react-bootstrap/esm/Image";

  const AttendanceDetails = () => {
    const[show,setShow]=useState([]);
    const[view,setView]=useState([]);
  const [data,setData]=useState({
    fromDate:'',
    toDate:'',
    selectEmployee:''
  });
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
   
 }
 const fetchData = () => {
  fetch("http://localhost:8080/basic/fetchdata", {
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setView(data)
    })
}
 const submitHandler=(e)=>{
  console.log(JSON.stringify(data))
  fetch('http://localhost:8080/attendance_details/save',{
    method:"POST",
    headers:{"content-Type":"application/json","Accept":"appliaction/json"},
    body:JSON.stringify(data)
 }).then(()=>{
    console.log(" attendance_details are added")
 })
}
useEffect(()=>{
  fetchData();
},[])


const coloum = [
  {
      name: 'Employee',
      selector: (row) => row.employeeName

  }
]
 
  return (
    <div style={{width:'75vw'}}>
    <div className="container">
      <h4>Attendance Details</h4>
      <hr />
      <div className="bg-light">
      <div className="row ">
        
        
    
     <div className="col-sm-4">
      <label  class="form-label">From Date</label><br/>
      <input value={data.fromDate} type="date" class="form-control" id="formGroupExampleInput" name="fromDate"onChange={inputChangeHandler} />
      
    </div>
    
    <div className="col-sm-4">
      <label  class="form-label">To Date</label><br/>
      <input value={data.toDate} type="date" class="form-control" id="formGroupExampleInput" name="toDate"onChange={inputChangeHandler} />
    </div>
    
    <div className="col-sm-3 mt-2">
           <label for="cars" id='label'>Select Employee:</label>
         <br/>  
     <select valueType={data.selectEmployee} class="form-select" aria-label="Default select example" name="selectEmployee" onChange={inputChangeHandler}>
      <option selected disabled>Choose Employee</option>
      {view.map(aman=>( <option valueType={aman.employeeName}>{aman.employeeName}</option>))}
    </select>
    </div>
    
    </div>
    <button  onClick={submitHandler} className="btn btn-primary mt-4">View details</button>
    </div>
    
    
    <table className='table'>
      
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Date</th>
          <th scope="col">Employee</th>
          <th scope="col">In Time</th>
          <th scope="col">Out Time</th>
          <th scope="col">Edit</th>
          <th scope="col">Del</th>
        </tr>
      </thead>
    
      <tbody>
        <tr>
          {/* <td data-label="sl">1</td>
          <td data-label="Date">01-10-2022</td>
          <td data-label="Employee">Administrator</td>
          <td data-label="In Time">09:30</td>
          <td data-label="Out Time">07:00</td> */}
          {/* <td data-label="Edit"><button onClick={submitHandler} className="btn btn-outline-primary">Edit</button></td>
          <td data-label="Del"><button onClick={submitHandler} className="btn btn-outline-primary">Delete</button></td> */}
        </tr>
    
        
        
      </tbody>
      
      <tbody>
        {show.map((item)=>(
          <tr>
            <td>
              {item.date}
            </td>
            <td>{item.Employee}</td>
            <td>{item.InTime}</td>
            <td>{item.OutTime}</td>
            <td>{item.Edit}</td>
            <td>{item.Delete}</td>
          </tr>
        ))}
        </tbody>
        {/* <table>
          {val.map((item)=>{
            <tr>{{item}}</tr>
          })}
        </table> */}
    </table>
    
        
    </div>
    </div>
        
  )
}



export default AttendanceDetails