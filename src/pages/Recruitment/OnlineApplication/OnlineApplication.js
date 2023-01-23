import { useState } from "react";

const OnlineApplication = () => {
  const [data,setData]=useState({
    fullName:'',
    email:'',
    contact:'',
    yearOfExperince:'',
    locationJobApplied:'',
    vacancyType:'',
    date:'',
    careerPercentage:'',
    imageUrl:'',
    exampleTextArea:'',
  });
 const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
    
 }
 const submitHandler=(e)=>{
  e.preventDefault();
 console.log(JSON.stringify(data))
  fetch("http://localhost:8080/application/save",{
  method:"POST",
  
  headers:{"Content-Type":"application/json","Accept":"appliction/json"},
  body:JSON.stringify(data)
}).then(()=>{
  console.log("AddJobTitle is added")
}).catch(err=>console.log(err))
 }

  return (
    
    <div  className="container">
  <h4>Online Application</h4>
  <hr />
  <form  actions="" enctype="multipart/ form data"  onSubmit={submitHandler} className="bg-light ">
  <div className="row pt-4">

  <div className="col-sm-3">
      <label  class="form-label">Full Name:</label><br/>
      <input value={data.fullName} type="text" class="form-control" id="formGroupExampleInput" name="fullName" onChange={inputChangeHandler}/>
    </div>

    <div className="col-sm-3">
      <label  class="form-label">Email:</label><br/>
      <input value={data.email}  type="text" class="form-control" id="formGroupExampleInput" name="email" onChange={inputChangeHandler} />
    </div>

    <div className="col-sm-3">
      <label  class="form-label">Contact No.:</label><br/>
      <input value={data.contact} type="text" class="form-control" id="formGroupExampleInput" name="contact" onChange={inputChangeHandler}/>
    </div>
    
    <div className="col-sm-3">
      <label  class="form-label">Year Of Experience:</label><br/>
      <input value={data.yearOfExperince} type="text" class="form-control" id="formGroupExampleInput" name="yearOfExperince" onChange={inputChangeHandler}/>
    </div>
    </div>
    <div className="row mt-4">
    <div className="col-sm-4">
      <label  class="form-label">Location Job Applied:</label><br/>
      <input value={data.locationJobApplied}type="text" class="form-control" id="formGroupExampleInput" name="locationJobApplied" onChange={inputChangeHandler}/>
    </div>

    <div className="col-sm-4 mt-2">
           <label for="cars" id='label'>Select Post:</label>
           {/* <input value={data.selectvacancytype}type="text" class="form-control" id="formGroupExampleInput" name="selectvacancytype" onChange={inputChangeHandler}/> */}
         <br/>  
     <select valueType={data.vacancyType}class="form-select" aria-label="Default select example" name="vacancyType" onChange={inputChangeHandler}>
      <option selected disabled>POST</option>
      <option valueType="developer">Developer</option>
      <option valueType="management">Management</option>
      <option valueType="creator">Creator</option>
    </select>
    </div>
    <div className="col-sm-4 ">
       <label  class="form-label">Date</label><br/>
       <input value={data.date} type="date" class="form-control" id="formGroupExampleInput" name="date" onChange={inputChangeHandler}/>
     </div>
     <div className="row mt-4">
     <div className="col-sm-4 mt-2">
      <label  class="form-label">Career % :</label><br/>
      <input value={data.careerPercentage}type="text" class="form-control" id="formGroupExampleInput" name="careerPercentage" onChange={inputChangeHandler} />
    </div>

    <div className="col-sm-4 mt-2">
       <label for="formFile" class="form-label">Resume Upload</label>
       <input value={data.imageUrl}class="form-control" type="file" id="formFile"name="imageUrl" onChange={inputChangeHandler}></input>
    </div>
       <div className="col-sm-4 mt-2">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea value={data.exampleTextArea} class="form-control" id="exampleFormControlTextarea1" rows="3"name="exampleTextArea" onChange={inputChangeHandler}></textarea>
       </div>

    </div>
     </div>
    <button type="submit" onClick={submitHandler} className="btn btn-primary my-4">Save</button>
    </form >
    
    </div>
  )
}



export default OnlineApplication;