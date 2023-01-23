import { useState } from "react";

  const EmployeeAllowance = () => {
    const [data,setData]=useState({
    
      employeeId:'',
      type:'',
      ammount:'',
      effectiveDate:'',
      dateCreated:'',
    });
   const inputChangeHandler=(e)=>{
      let newData={...data};
      newData[e.target.name]=e.target.value;
      setData(newData)
   }
   const submitHandler=(e)=>{
    console.log(JSON.stringify(data))
    fetch("http://localhost:8080/employeeAllowances/employeeAllowances",{
      method:"POST",
      headers:{"content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("payroll are added")
    })
  }
   return <>
   <div className="container">
    <div className="d-flex">
     <h3>Employee Allowance</h3>
     </div> 
     <hr />
     <div className="bg-light">
     <div className="row ">
       
       
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Employee Id:</label>
        <br/>
     <input value={data.employeeId} type="text" class="form-control" id="formGroupExampleInput" name="employeeId" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Type:</label>
        <br/>
     <input value={data.type} type="text" class="form-control" id="formGroupExampleInput" name="type" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Amount:</label>
        <br/>
     <input value={data.ammount} type="text" class="form-control" id="formGroupExampleInput" name="ammount" onChange={inputChangeHandler}/>
   </div>

   <div className="col-sm-4 mt-2">
         <label  for="form-label">Effective Date</label><br/>
        <input value={data.effectiveDate} type="date" class="form-control" id="formGroupExampleInput" name="effectiveDate" onChange={inputChangeHandler}/>
    </div>
    <div className="col-sm-4 mt-2">
        <label  for="form-label">Date created</label><br/>
        <input value={data.dateCreated} type="date" class="form-control" id="formGroupExampleInput" name="dateCreated" onChange={inputChangeHandler}/>
    </div>
   

   </div>
   <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
   </div>
   </div>
   </>
   }
   
export default EmployeeAllowance;