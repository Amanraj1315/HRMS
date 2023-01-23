import { useState } from "react";

  const PayRoll = () => {
    const [data,setData]=useState({
      refNo:'',
      type:'',
      status:'',
      dateFrom:'',
      dateTo:'',
      dateCreated:'',
    });
   const inputChangeHandler=(e)=>{
      let PayRoll={...data};
      PayRoll[e.target.name]=e.target.value;
      setData(PayRoll)
   }
   const submitHandler=(e)=>{
    console.log(JSON.stringify(data))

    fetch("http://localhost:8080/payrolls/payroll",{
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
     <h3>PayRoll</h3>
     </div> 
     <hr />
     <div className="bg-light">
     <div className="row ">
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Ref No.:</label>
        <br/>
     <input value={data.refNo} type="text" class="form-control" id="formGroupExampleInput" name="refNo" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Type:</label>
        <br/>
     <input value={data.type} type="text" class="form-control" id="formGroupExampleInput" name="type" onChange={inputChangeHandler}/>
   </div>
   <div className="col-sm-4 mt-2">
          <label for="cars" id='label'>Status:</label>
        <br/>
     <input value={data.status} type="text" class="form-control" id="formGroupExampleInput" name="status" onChange={inputChangeHandler}/>
   </div>

   <div className="col-sm-4 mt-2">
         <label  for="form-label">Date From</label><br/>
        <input value={data.dateFrom} type="date" class="form-control" id="formGroupExampleInput" name="dateFrom" onChange={inputChangeHandler}/>
    </div>
    <div className="col-sm-4 mt-2">
         <label  for="form-label">Date To</label><br/>
        <input value={data.dateTo} type="date" class="form-control" id="formGroupExampleInput" name="dateTo" onChange={inputChangeHandler}/>
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
   
export default PayRoll;