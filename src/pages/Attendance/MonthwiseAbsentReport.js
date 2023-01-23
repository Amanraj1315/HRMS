import { useState,useEffect} from "react";

const MonthwiseAbsentReport = () => {
  const [data,setData]=useState({
    // SelectEmployee:'',
    //   todate:'',
    //   fromdate:''
  });
  const [show, setShow] = useState([]);
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
    
 }
 const submitHandler=(e)=>{
    console.log(JSON.stringify(data))
 }
 const fetchData = () => {
  fetch("http://localhost:8080/basic/fetchdata", {
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setShow(data)
    })
}
useEffect(() => {
    fetchData();
  }, [])

  return <>
  <div className="container">
    <h4>Datewise Absent Report</h4>
    <hr className="100%" />
    <div className="bg-light">
    <div className="row ">
      
      
    <div className="col-sm-4 mt-1">
         <label for="cars" id='label'>Select Employee:</label>
       <br/>  
   <select value={data.selectEmployee} class="form-select" aria-label="Default select example" name="selectemployee" onChange={inputChangeHandler}>
    <option selected disabled>select employee</option>
    {show.map(aman=>( <option valueType={aman.employeeName}>{aman.employeeName}</option>))}
      {/* <option value="aman">Aman</option>
      <option value="amit">Amit</option>
      <option value="ranjan">Ranjan</option>
      <option value="saurav">Saurav</option> */}
  </select>
  </div>
  <div className="col-sm-4 mt-2">
       <label for="cars" id='label'>Status</label>
     <br/>  
 <select value={data.selectEmployee} class="form-select" aria-label="Default select example" name="selectEmployee" onChange={inputChangeHandler}>
  <option selected>Select</option>
  {/* {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))} */}
  <option value="present">Present</option>
  <option value="absent">Absent</option>
</select>
</div>

  
   <div className="col-sm-4">

    <label  class="form-label"> From Date :</label><br/>
    <input value={data.fromtime} type="date" class="form-control" id="formGroupExampleInput" name="fromtime" onChange={inputChangeHandler} />
  </div>
  <div className="col-sm-4">
    <label  class="form-label">To Date:</label><br/>
    <input value={data.totime} type="date" class="form-control" id="formGroupExampleInput" name="totime" onChange={inputChangeHandler} />
  </div>
  </div>
  <button onClick={submitHandler} className="btn btn-primary mt-4">View</button>
  </div>
  </div>
  </>
  }
  
  export default MonthwiseAbsentReport;