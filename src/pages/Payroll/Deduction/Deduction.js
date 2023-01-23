

import { useState } from "react";

const Deduction = () => {
const [data,setData]=useState({
  
});
const inputChangeHandler=(e)=>{
  let newData={...data};
  newData[e.target.name]=e.target.value;
  setData(newData)
  
}
 const submitHandler=(e)=>{
  e.preventDefault();
  console.log(JSON.stringify(data))
  fetch("http://localhost:8080/deductions/deduction",{
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
  <h3>Deduction</h3>
  </div> 
  <hr />
  <form onSubmit={submitHandler} className="bg-light">
  <div className="row ">
    
    

<div className="col-sm-6 mt-2">
       <label for="cars" id='label'>Deduction:</label>
     <br/>
  <input value={data.deduction} type="text" class="form-control" id="formGroupExampleInput" name="deduction" onChange={inputChangeHandler}/>
</div>




<div className="col-sm-6 mt-2">
       <label for="cars" id='label'>Description:</label>
     <br/>
  <input value={data.description} type="text" class="form-control" id="formGroupExampleInput" name="description" onChange={inputChangeHandler}/>
</div>





</div>
<button type="submit" class="btn btn-primary mt-4">Save</button>
</form>
</div>
</>
}

export default Deduction;