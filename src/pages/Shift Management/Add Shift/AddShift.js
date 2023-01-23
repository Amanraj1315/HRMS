import { useState,useEffect } from "react";
import { Form } from 'react-bootstrap'


const AddShift = () => {
  const [data,setData]=useState({
    shiftdutyassign:'',
    shiftName:'',
    employee:'',
  });
  const[show,setShow]=useState([]);
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
 }
 const submitHandler=(e)=>{
  console.log(JSON.stringify(data))

  fetch("http://localhost:8080/shiftmanagement/addshift",{
    method:"POST",
    headers:{"Content-Type": "application/json", "Accept":"application/json"},
    body:JSON.stringify(data)
  }).then(()=>{
    console.log("Shift Management")})


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
useEffect(()=>
{
  fetchData1();
},[])

  return (
    <div className="container">
      <h2>Shift Duty Assign</h2>
      <hr />
      <div className="bg-light">
        <div className="row ">
        <div className=" col-sm-4">
        <label >Date:</label>
       <div ><Form.Control value={data.date} type="date" name="date" onChange={inputChangeHandler}></Form.Control></div>
       </div>
       <div className="col-sm-4 ">
            <label for="cars" id='label'>Shift Name:</label>
            <br />
            <select valueType={data.shiftName} class="form-select" aria-label="Default select example" name="shiftName" onChange={inputChangeHandler}>
              <option selected disabled>Choose Shift</option>
              <option valueType="night">Night</option>
              <option valueType="day">Day</option>
              {/* <option valueType="afternoon">Shift C</option>
              <option valueType="Evening">Shift D</option> */}
            </select>
          </div>
          <div className="col-sm-4">
            <label for="car" id='label' >Employee:</label>
          
            <select valueType={data.employee}  class="form-select" aria-label="Default select example"  name="employee" onChange={inputChangeHandler} >
            <option selected disabled>Select Employee</option>
            {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
            {/* <option valueType="night">Night</option>
              <option valueType="day">Day</option> */}
              </select>
          </div>
          </div>
          <button onClick={submitHandler} className="btn btn-primary btn-sm my-3 mx-5 ">Save</button>
          </div>
    </div>  
  )
}

export default AddShift