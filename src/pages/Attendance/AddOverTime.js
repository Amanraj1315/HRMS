import { useState ,useEffect} from "react";

  const OvertimeReport = () => {
  const [data,setData]=useState({
    

  });
  const[show,setShow]=useState([]);
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
   
 }
 const fetchData = () =>{
  fetch("http://localhost:8080/basic/fetchdata",{
  })
  .then((response) =>{
    return response.json();
  })
  .then((data) =>{
    setShow(data)
  })
}
useEffect(()=>{
  fetchData();
},[])
 const submitHandler=(e)=>{
  console.log(JSON.stringify(data))
  fetch("http://localhost:8080/OverTime/save",{
    method:"POST",
    headers:{"content-Type": "application/json", "Accept": "application/json"},
    body:JSON.stringify(data)
  }).then(()=>{
    console.log("OverTime are added")})
  
 }

  return <>
  <div className="container">
    <h4>Add OverTime</h4>
    <hr />
    <div className="bg-light">
    <div className="row ">
      
      
    <div className="col-sm-4 mt-2">
         <label for="cars" id='label'>Select Employee:</label>
       <br/>  
   <select value={data.selectEmployee} class="form-select" aria-label="Default select example" name="selectEmployee" onChange={inputChangeHandler}>
    <option selected disabled>select employee</option>
    {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))}
    {/* <option value="aman">Aman</option>
    <option value="amit">Amit</option>
    <option value="ranjan">Ranjan</option>
    <option value="saurav">Saurav</option>
    <option value="raj kumar mali">Raj Kumar Mali</option>
    <option value="vijay kumar ray">Vijay Kumar Ray</option> */}
  </select>
  </div>
  
   <div className="col-sm-4">
    <label  class="form-label">Date</label><br/>
    <input value={data.date} type="date" class="form-control" id="formGroupExampleInput" name="date" onChange={inputChangeHandler}/>
  </div>
  <div className="col-sm-2">
    <label  class="form-label">Start Time</label><br/>
    <input value={data.startTime} type="time" class="form-control" id="formGroupExampleInput" name="startTime" onChange={inputChangeHandler} />
  </div>
  <div className="col-sm-2">
    <label  class="form-label">EndTime</label><br/>
    <input value={data.endTime} type="time" class="form-control" id="formGroupExampleInput" name="endTime" onChange={inputChangeHandler}/>
  </div>
  <div className="col-sm-4">
    <label  class="form-label">Description</label><br/>
    <input value={data.description} type="text" class="form-control" id="formGroupExampleInput" name="description" onChange={inputChangeHandler}/>
    
    
  </div>
  </div>
  <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
  </div>
  </div>
  </>
  }
  
  export default OvertimeReport;