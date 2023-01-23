import { useState } from "react";

  const PayrollItem = () => {
    const [data,setData]=useState({
      payrollid:'',
      present:'',
      absent:'',
      late:'',
      salary:'',
      allowanceamount:'',
      allowancetype:'',
      deductionamount:'',
      deduction:'',
      grossnet:'',
      datecreated:'',
    });
   const inputChangeHandler=(e)=>{
      let newData={...data};
      newData[e.target.name]=e.target.value;
      setData(newData)
    
   }
   const submitHandler=(e)=>{
    console.log(JSON.stringify(data))
  }
   return <>
   <div className="container">
    <div className="d-flex">
     <h3>PayRoll Item</h3>
     </div> 
     <hr />
     <div className="bg-light">
     <div className="row ">

   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Payroll Id.:</label>
        <br/>
     <input value={data.payrollid} type="text" class="form-control" id="formGroupExampleInput" name="payrollid" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Present:</label>
        <br/>
     <input value={data.present} type="text" class="form-control" id="formGroupExampleInput" name="present" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Absent:</label>
        <br/>
     <input value={data.absent} type="text" class="form-control" id="formGroupExampleInput" name="absent" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Late:</label>
        <br/>
     <input value={data.late} type="text" class="form-control" id="formGroupExampleInput" name="late" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Salary:</label>
        <br/>
     <input value={data.salary} type="text" class="form-control" id="formGroupExampleInput" name="salary" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Allowance Amount:</label>
        <br/>
     <input value={data.allowanceamount} type="text" class="form-control" id="formGroupExampleInput" name="allowanceamount" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Allowance Type:</label>
        <br/>
     <input value={data.allowancetype} type="text" class="form-control" id="formGroupExampleInput" name="allowancetype" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Deduction Amount:</label>
        <br/>
     <input value={data.deductionamount} type="text" class="form-control" id="formGroupExampleInput" name="deductionamount" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Deduction:</label>
        <br/>
     <input value={data.deduction} type="text" class="form-control" id="formGroupExampleInput" name="deduction" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Gross Net:</label>
        <br/>
     <input value={data.grossnet} type="text" class="form-control" id="formGroupExampleInput" name="grossnet" onChange={inputChangeHandler}/>
   </div>
    <div className="col-sm-4 mt-2">
        <label  for="form-label">Date created</label><br/>
        <input value={data.datecreated} type="date" class="form-control" id="formGroupExampleInput" name="datecreated" onChange={inputChangeHandler}/>
    </div>
   

   </div>
   <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
   </div>
   </div>
   </>
   }
   
export default PayrollItem;