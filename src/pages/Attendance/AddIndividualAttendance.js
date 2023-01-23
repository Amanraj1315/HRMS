import { useEffect, useState } from "react";

  const AddAttendance = () => {
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
    e.preventDefault();
    console.log(JSON.stringify(data))



    fetch("http://localhost:8080/attendance/save",{
            method:"POST",
            headers:{"content-Type": "application/json", "Accept": "application/json"},
            body:JSON.stringify(data)
          }).then(()=>{
            console.log("Attendance are added")}).catch(err=>console.log(err))

   }
return <>
<div className="container">
  <h4>Add Attendance</h4>
  <hr />
  <form onSubmit={submitHandler} className="bg-light">
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
<div className="col-sm-4 mt-2">
       <label for="cars" id='label'>Add Attendance</label>
     <br/>  
 <select value={data.selectEmployee} class="form-select" aria-label="Default select example" name="selectEmployee" onChange={inputChangeHandler}>
  <option selected>select</option>
  {/* {show.map(e=>(<option valueType={e.employeeName}>{e.employeeName}</option>))} */}
  <option value="present">Present</option>
  <option value="absent">Absent</option>
</select>
</div>

 <div className="col-sm-4 mt-2">
  <label   for="cars" id='label'>Date</label>
  <input value={data.date} type="date" class="form-control"  aria-label="Default select example"  name="date" onChange={inputChangeHandler}/>
</div>
<div className="col-sm-4 mt-2">
  <label   for="cars" id='label'>In Time</label><br/>
  <input value={data.inTime} type="time" class="form-control" aria-label="Default select example"  name="inTime" onChange={inputChangeHandler} />
</div>
<div className="col-sm-4 mt-2">
  <label   for="cars" id='label'>Out Time</label><br/>
  <input value={data.outTime} type="time" class="form-control" aria-label="Default select example"  name="outTime" onChange={inputChangeHandler}/>
</div>
</div>
<button type="submit" className="btn btn-primary mt-4">Save</button>
</form>
</div>
</>
}

export default AddAttendance;









// import { useState } from "react";

//   const AddAttendance = () => {
//     const [data,setData]=useState({
//       selectEmployee:'',
//       date:'',
//       inTime:'',
//       outTime:'',
   
//     });
//    const inputChangeHandler=(e)=>{
//       let newData={...data};
//       newData[e.target.name]=e.target.value;
//       setData(newData)
      
//    }
//    const submitHandler=(e)=>{
//     console.log(JSON.stringify(data))
//     fetch("http://localhost:8080/Attendance/save",{
//       method:"POST",
//       headers:{"content-Type": "application/json", "Accept": "application/json"},
//       body:JSON.stringify(data)
//     }).then(()=>{
//       console.log("Attendance are added")})
//    }
// return <>
// <form className="container">
//   <h4>Add Attendance</h4>
//   <hr />
//   <div className="bg-light">
//   <div className="row ">
    
   
//   <div className="col-sm-4 mt-2">
//        <label for="cars" id='label'>Select Emoloyee:</label>
//      <br/>  
//  <select value={data.selectEmployee} class="form-select" aria-label="Default select example" name="selectEmployee" onChange={inputChangeHandler}>
//   <option selected disabled>Admistrator</option>
//   <option value="aman">Aman</option>
//   <option value="amit">Amit</option>
//   <option value="ranjan">Ranjan</option>
//   <option value="saurav">Saurav</option>
// </select>
// </div>

//  <div className="col-sm-4">
//   <label  class="form-label">Date</label><br/>
//   <input value={data.date} type="date" class="form-control" id="formGroupExampleInput" name="date" onChange={inputChangeHandler}/>
// </div>
// <div className="col-sm-2">
//   <label  class="form-label">In Time</label><br/>
//   <input value={data.inTime} type="time" class="form-control" id="formGroupExampleInput" name="inTime" onChange={inputChangeHandler} />
// </div>
// <div className="col-sm-2">
//   <label  class="form-label">Out Time</label><br/>
//   <input value={data.outTime} type="time" class="form-control" id="formGroupExampleInput" name="outTime" onChange={inputChangeHandler}/>
// </div>
// </div>
// <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>

// </div>

// </form>
// </>
// }

// export default AddAttendance;