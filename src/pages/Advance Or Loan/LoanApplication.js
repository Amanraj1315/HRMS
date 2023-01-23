import { useState,useEffect } from "react";

  const LoanApplication = () => {
  const [data,setData]=useState({
  
  });
  const[show,setShow]=useState([]);
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
    
 }
 const submitHandler=(e)=>{
  console.log(JSON.stringify(data))
  
   fetch("http://localhost:8080/loan_application/save",{
     method:"POST",
     headers:{"content-Type": "application/json", "Accept": "application/json"},
     body:JSON.stringify(data)
   }).then(()=>{
     console.log("loan_application are added")})

  
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

  return <>
  <div className="container">
    <h4>Loan Application</h4>
    <hr />
    <div className="bg-light">
    <div className="row ">
      
      
    <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Choose Emoloyee:</label>
       <br/>  
       <select valueType={data.chooseEmployee} class="form-select" aria-label="Default select example" name="chooseEmployee" onChange={inputChangeHandler}>
  
    <option selected disabled>Select Employee</option>
    {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
    {/* <option valueType="aman">Aman</option>
    <option valueType="amit">Amit</option>
    <option valueType="ranjan">Ranjan</option>
    <option valueType="saurav">Saurav</option> */}
  </select>
  </div>
  <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Loan Type:</label>
       <br/>  
   <select valueType={data.loanType} class="form-select" aria-label="Default select example" name="loanType" onChange={inputChangeHandler}>
   
    <option selected disabled>Choose Type</option>
    <option valueType="aman">Home Loan</option>
    <option valueType="amit">Gold Loan</option>
    <option valueType="ranjan">Personal Loan</option>
    <option valueType="saurav">Property Loan</option>
  </select>
  </div>
   <div className="col-sm-4 mt-2">
    <label for="cars" id='label'>Posting Date</label>
    <input value={data.PostingDate} type="date" class="form-control" id="formGroupExampleInput" name="postingDate" onChange={inputChangeHandler}/>
  </div>
  <div className="col-sm-4 mt-2">
    <label for="cars" id='label'>Required Date</label>
    <input value={data.requriedDate} type="date" class="form-control" id="formGroupExampleInput" name="requiredDate" onChange={inputChangeHandler}/>
  </div>
  

  <div className="col-sm-4 mt-2">
    <label for="cars" id='label'>Amount Rs.</label>
    <input value={data.amountRs} type="text" class="form-control" id="formGroupExampleInput" name="amountRs" onChange={inputChangeHandler}/>
  </div>

  <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Select Approver:</label>
       <br/>  
   <select valueType={data.selectApprover} class="form-select" aria-label="Default select example" name="selectApprover" onChange={inputChangeHandler}>
    <option selected disabled>Select Approver</option>
    <option valueType="aman">Aman</option>
    <option valueType="amit">Amit</option>
    <option valueType="ranjan">Ranjan</option>
    <option valueType="saurav">Saurav</option>
  </select>
  </div>

  
    <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Loan Reason:</label>
    <br/>
    <input value={data.loanReason} type="text" class="form-control" id="formGroupExampleInput" name="loanReason" onChange={inputChangeHandler}/>
  </div>

  <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Repayment Method:</label>
       <br/>  
   <select valueType={data.rePaymentMethod} class="form-select" aria-label="Default select example" name="rePaymentMethod" onChange={inputChangeHandler}>
    <option selected disabled>Select Method</option>
    <option valueType="aman">Cash</option>
    <option valueType="amit">Cheque</option>
    <option valueType="ranjan">NEFT</option>
    <option valueType="saurav">RTGS</option>
  </select>
  </div>

  
  <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Re Payment Starting Date</label>
    <input value={data.rePaymentStartingDate} type="date" class="form-control" id="formGroupExampleInput" name="rePaymentStartingDate" onChange={inputChangeHandler}/>
  </div>

  <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Repayment Comment</label>
    <input value={data.repaymentComments} type="text" class="form-control" id="formGroupExampleInput" name="repaymentComments" onChange={inputChangeHandler}/>
  </div>

  </div>
  <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
  </div>
  </div>
  </>
  }
  
  export default LoanApplication;