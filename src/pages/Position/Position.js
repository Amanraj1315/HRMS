

import { useState } from "react";

const Position = () => {
const [data,setData]=useState({
  
  departmentid:'',
  name:'',
  positionid:'',
  
});
const inputChangeHandler=(e)=>{
  let newData={...data};
  newData[e.target.name]=e.target.value;
  setData(newData)
  

 
}
  const submitHandler=(e)=>{
    console.log(JSON.stringify(data))
   
    fetch("http://localhost:8080/position",{
      method:"POST",
      headers:{"Content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("item are added")})
    
  }

  
 

return <>
<div className="container">
 <div className="d-flex">
  <h3>Position</h3>
  </div> 
  <hr />
  <div className="bg-light">
  <div className="row ">
    
    
  <div className="col-sm-6 mt-2">
       <label for="cars" id='label'>Department ID:</label>
     <br/>
  <input value={data.departmentid} type="text" class="form-control" id="formGroupExampleInput" name="departmentid" onChange={inputChangeHandler}/>
</div>

<div className="col-sm-6 mt-2">
       <label for="cars" id='label'>Name:</label>
     <br/>
  <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/>
</div>

<div className="col-sm-6 mt-2">
       <label for="cars" id='label'>Position Id:</label>
     <br/>
  <input value={data.positionid} type="text" class="form-control" id="formGroupExampleInput" name="positionid" onChange={inputChangeHandler}/>
</div>





</div>
<button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
</div>
</div>
</>

  }
export default Position;