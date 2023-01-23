import { useState } from "react";

  const LoanMaster = () => {
  const [data,setData]=useState({
   
  });
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
    
 }
 const submitHandler=(e)=>{
  console.log(JSON.stringify(data))

  fetch("http://localhost:8080/loan_master/save",{
    method:"POST",
    headers:{"content-Type": "application/json", "Accept": "application/json"},
    body:JSON.stringify(data)
  }).then(()=>{
    console.log("loan_master are added")})

}


  return <>
  <div className="container">
    <h4>Add Loan</h4>
    <hr />
    <div className="bg-light">
    <div className="row ">
      
      
    <div className="col-sm-3">
    <label  class="form-label">Loan Id</label><br/>
    <input value={data.loanId} type="text" class="form-control" id="formGroupExampleInput" name="loanId" onChange={inputChangeHandler}/>
  </div>
  <div className="col-sm-3">
    <label  class="form-label">Loan Name </label><br/>
    <input value={data.loanName} type="text" class="form-control" id="formGroupExampleInput" name="loanName" onChange={inputChangeHandler}/>
  </div>

  <div className="col-sm-3 ">
    <label  class="form-label">Rate of Interest</label><br/>
    <input value={data.rateOfInterest} type="text" class="form-control" id="formGroupExampleInput" name="rateOfInterest" onChange={inputChangeHandler}/>
  </div>

  <div className="col-sm-3  ">
         <label class="form-label">Loan Type:</label>
       <br/>  
   <select value={data.loanType} class="form-select" aria-label="Default select example" name="loanType" onChange={inputChangeHandler}>
   
    <option selected disabled>With Interest</option>
    <option value="xyz">xyz</option>
    <option value="abc">abc</option>
    <option value="pqr">pqr</option>
    <option value="mnop">mnop</option>
  </select>
  </div>

  <div className="col-sm-4 mt-2">
    <label  class="form-label">Loan Criteria</label><br/>
    <input value={data.loanCriteria} type="text" class="form-control" id="formGroupExampleInput" name="loanCriteria" onChange={inputChangeHandler}/>
  </div>
  <div className="col-sm-6 mt-2">
           <label for="cars" id='label'>Description</label>
          
         <div className="col-sm-6 mt-2">
        <textarea value={data.description} class="form-control" id="exampleFormControlTextarea1" rows="3"name="description"onChange={inputChangeHandler}></textarea>
       </div>
    </div>
  </div>
  <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
  </div>
  </div>
  </>
  }
  
  export default LoanMaster;