import { useState } from "react";

  const Allowances = () => {
    const [data,setData]=useState({
      allowancesDescription:'',
    });
   const inputChangeHandler=(e)=>{
      let newData={...data};
      newData[e.target.name]=e.target.value;
      setData(newData)
      
   }
   const submitHandler= (e)=>{
      e.preventDefault();
      console.log(JSON.stringify(data))
      fetch("http://localhost:8080/allowance/allowances",{
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
     <h3>Allowances</h3>
     </div> 
     <hr />
     <form onSubmit={submitHandler} className="bg-light">
     <div className="row ">
   
   
   
   
   
   <div className="col-sm-5 mt-2">
          <label for="cars" id='label'> Allowance Description:</label>
        <br/>
     <input value={data.allowancesDescription} type="text" class="form-control" id="formGroupExampleInput" name="allowancesDescription" onChange={inputChangeHandler}/>
   </div>
   
   
   
   
   
   </div>
   <button type="submit" class="btn btn-primary mt-4">Save</button>
   </form>
   </div>
   </>
   }
   
export default Allowances;