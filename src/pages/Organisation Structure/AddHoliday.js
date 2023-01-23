import React,{ useState } from "react";

const AddHoliday= () => {
  const [data,setData]=useState({
    // holidayName:'',
    // holidayType:'',
    // admistrator:'',
    // fromDate:'',
    // toDate:'',
  });
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
 }
 const submitHandler=(e)=>{
  console.log(JSON.stringify(data))

  fetch("http://localhost:8080/leave/LeaveDetail",{
    method:"POST",
    headers:{"content-Type": "application/json", "Accept": "application/json"},
    body:JSON.stringify(data)
  }).then(()=>{
    console.log("LeaveDetail are added")})


 }

return <>
<div className="container">
  <h4>Add Holiday</h4><button type="button" class="btn btn-primary sm-4 mt-2">Add Holiday Master</button>   
  <hr />
  <div className="bg-light">
  <div className="row ">
    
    
  <div className="col-sm-6">
  <label  class="form-label">Holiday Name:</label><br/>
  <input value={data.holidayName} type="Text" class="form-control" id="formGroupExampleInput" name="holidayName" onChange={inputChangeHandler} />
</div>
<div className="col-sm-6 mt-2">
       <label for="cars" id='label'>Holiday Type:</label>
     <br/>  
 
 <select value={data.holidayType} class="form-select" aria-label="Default select example" name="holidayType" onChange={inputChangeHandler}> 
 <option selected disabled>Admistrator</option>
  <option value="aman">Aman</option>
  <option value="amit">Amit</option>
  <option value="ranjan">Ranjan</option>
  <option value="saurav">Saurav</option>
</select>
</div>

 <div className="col-sm-6">
  <label  class="form-label">From Date</label><br/>
  <input value={data.fromDate} type="Date" class="form-control" id="formGroupExampleInput" name="fromDate" onChange={inputChangeHandler} />

</div>

<div className="col-sm-6">
  <label  class="form-label">To Date</label><br/>
  <input value={data.toDate} type="Date" class="form-control" id="formGroupExampleInput" name="toDate" onChange={inputChangeHandler} />

</div>

</div>
<button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
</div>
</div>
</>
}

export default AddHoliday;