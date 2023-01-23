import { useState } from "react";

  const EmployeeDeduction = () => {
    const [data,setData]=useState({
      
      empId:'',
      deductionId:'',
      ammount:'',
      effectiveDate:'',
      dateCreated:'',
      type:''
    });
   const inputChangeHandler=(e)=>{
      let newData={...data};
      newData[e.target.name]=e.target.value;
      setData(newData)
   }
   const submitHandler=(e)=>{
    console.log(JSON.stringify(data))
    fetch("http://localhost:8080/employeededuction/empdeduction",{
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
     <h3>Employee Deduction</h3>
     </div> 
     <hr />
     <div className="bg-light">
     <div className="row ">
       
       
    
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Employee Id:</label>
        <br/>
     <input value={data.empId} type="text" class="form-control" id="formGroupExampleInput" name="empId" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Deduction Id:</label>
        <br/>
     <input value={data.deductionId} type="text" class="form-control" id="formGroupExampleInput" name="deductionId" onChange={inputChangeHandler}/>
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
    <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Type:</label>
        <br/>
     <input value={data.type} type="text" class="form-control" id="formGroupExampleInput" name="type" onChange={inputChangeHandler}/>
   </div>
   

   </div>
   <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
   </div>
   </div>
   </>
   }
   
export default EmployeeDeduction;