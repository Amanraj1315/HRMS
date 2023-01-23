

import { useState } from "react";

const UserApproval = () => {
const [data,setData]=useState({

});
const inputChangeHandler=(e)=>{
  let newData={...data};
  newData[e.target.name]=e.target.value;
  setData(newData)
  // console.log(JSON.stringify(newData))
  }
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data))
    fetch('http://localhost:8080/saveapproval', {

      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      console.log("Approval Added");
    }).catch(err => console.log(err))
  }
//  const submitHandler=(e)=>{
//     e.preventDefault();
//  }

return <>
<div className="container">
 <div className="d-flex">
  <h3>Add Approval</h3>
  <button type="button" className="btn btn-primary sm-4 mt-2 mx-3">Add Approval Master</button>
  </div> 
  <hr />
  <h5>Add/Edit User</h5>
  <div className="bg-light">
  <div className="row ">
    
  <div className="col-sm-6 mt-2">
         <label for="cars" id='label'>User Name:</label>
       <br/>  
   <select valueType={data.userName} class="form-select" aria-label="Default select example" name="userName" onChange={inputChangeHandler}>
   {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
    <option selected disabled>Select User</option>
    <option valvalueTypeue="aman@123">Aman@123</option>
    <option valueType="amit@123">Amit@123</option>
    <option valueType="ranjan@123">Ranjan@123</option>
    <option valueType="saurav@123">Saurav@123</option>
  </select>
  </div>    


  <div className="col-sm-6 mt-2">
         <label for="cars" id='label'>Employee Name:</label>
       <br/>  
   <select valueType={data.employeeName} class="form-select" aria-label="Default select example" name="employeeName" onChange={inputChangeHandler}>
   {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
    <option selected disabled>Select Employee Name</option>
    <option valueType="aman">Aman</option>
    <option valueType="amit">Amit</option>
    <option valueType="ranjan">Ranjan</option>
    <option valueType="saurav">Saurav</option>
  </select>
  </div>


  <div className="col-sm-6 mt-2">
         <label for="cars" id='label'>Approval Name:</label>
       <br/>  
   <select valueType={data.approvalName} class="form-select" aria-label="Default select example" name="approvalName" onChange={inputChangeHandler}>
   {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
    <option selected disabled>Select</option>
    <option valueType="aman">Aman</option>
    <option valueType="amit">Amit</option>
    <option valueType="ranjan">Ranjan</option>
    <option valueType="saurav">Saurav</option>
  </select>
  </div>

  <div className="col-sm-6 mt-2">
       <label for="cars" id='label'>Approval Code:</label>
     <br/>
  <input value={data.approvalCode} type="text" class="form-control" id="formGroupExampleInput" name="approvalCode" onChange={inputChangeHandler}/>
</div>

</div>
<button onClick={submitHandler} type="button" class="btn btn-primary  mt-4 ">Save</button>   
</div>
</div>
</>
}

export default UserApproval;