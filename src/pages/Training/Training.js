import { useState } from "react";

  const Employee = () => {
    const [data,setData]=useState({
      empid:'',
      depid:'',
      firstname:'',
      middlename:'',
      lastname:'',
      salary:'',
    });
   const inputChangeHandler=(e)=>{
      let newData={...data};
      newData[e.target.name]=e.target.value;
      setData(newData)
   }
  //  const submitHandler=(e)=>{
  //   console.log(JSON.stringify(data))
  // }
  const submitHandler=(e)=>{
    console.log(JSON.stringify(data))
  
    fetch("http://localhost:8080/training/save",{
      method:"POST",
      headers:{"content-Type": "application/json", "Accept": "application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("Training are added")})
  
  }
   return <>
   <div className="container">
    <div className="d-flex">
     <h3>Add Details</h3>
     </div> 
     <hr />
     <div className="bg-light">
     <div className="row ">
  
   <div className="col-sm-4 my-4">
          <label for="cars" id='label'>Name:</label>
        <br/>
     <input value={data.trainingName} type="text" class="form-control" id="formGroupExampleInput" name="trainingName" onChange={inputChangeHandler}/>
   </div>

   <div className="col-sm-4 my-4">
          <label for="cars" id='label'>Description:</label>
        <br/>
     <input value={data.description} type="text" class="form-control" id="formGroupExampleInput" name="description" onChange={inputChangeHandler}/>
   </div>
   {/* <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>DEP ID:</label>
        <br/>
     <input value={data.depid} type="text" class="form-control" id="formGroupExampleInput" name="depid" onChange={inputChangeHandler}/>
   </div>

   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'> First Name:</label>
        <br/>
     <input value={data.firstname} type="text" class="form-control" id="formGroupExampleInput" name="firstname" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'> Middle Name:</label>
        <br/>
     <input value={data.middlename} type="text" class="form-control" id="formGroupExampleInput" name="middlename" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'> Last Name:</label>
        <br/>
     <input value={data.lastname} type="text" class="form-control" id="formGroupExampleInput" name="lastname" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Salary:</label>
        <br/>
     <input value={data.salary} type="text" class="form-control" id="formGroupExampleInput" name="salary" onChange={inputChangeHandler}/>
   </div> */}

   </div>
   <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
   </div>
   </div>
   </>
   }
   
export default Employee;