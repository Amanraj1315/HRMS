import { useState } from "react";

const FixingInterviewOnline = () => {
  const [data, setData] = useState({
    vacancy: '',
    candidate: '',
    time: '',
    date: '',
    method: '',
    comment: '',
    status: '',

  });
  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData)

  }
  const submitHandler = (e) => {
    console.log(JSON.stringify(data))
    fetch("http://localhost:8080/intreview/save", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "appliction/json" },
      body: JSON.stringify(data)
    }).then(() => {
      console.log("Intrview scheduled")
    })
  }


  return (
    <div onSubmit={submitHandler} className="container">
      <h4>Fixing Interview Online</h4>
      <hr />
      <div className="bg-light">
        <div className="row ">


          <div className="col-sm-4 mt-2">
            <label for="cars" id='label'>Select Vacancy:</label>
            <br />
            <select valueType={data.vacancy} class="form-select" aria-label="Default select example" name="vacancy" onChange={inputChangeHandler}>
              <option selected disabled>Select Vacancy Type</option>
              <option valueType="aman">Aman</option>
              <option valueType="amit">Amit</option>
              <option valueType="Ranjan">Ranjan</option>
              <option valueType="saurav">Saurav</option>
            </select>
          </div>

          <div className="col-sm-4 mt-2">
            <label for="cars" id='label'>Candidate Name:</label>

            <input value={data.candidate} type="text" className="form-control" id="formGroupExampleInput" name="jobTitles" onChange={inputChangeHandler} />
          </div>
          <div className="col-sm-2">

            <label class="form-label">Interview Time</label><br />
            <input value={data.time} type="time" class="form-control" id="formGroupExampleInput" name="time" onChange={inputChangeHandler} />
          </div>

          <div className="col-sm-3 ">

            <label class="form-label">Date</label><br />
            <input value={data.date} type="date" class="form-control" id="formGroupExampleInput" name="date" onChange={inputChangeHandler} />
          </div>

          <div className="col-sm-3 mt-2">

            <label for="cars" id='label'>Method:</label>

            <select valueType={data.method} class="form-select" aria-label="Default select example" name="method" onChange={inputChangeHandler}>
              <option selected disabled>Choose Method</option>
              <option valueType="online">Online</option>
              <option valueType="offline">Offline</option>

            </select>
          </div>

          {/* <div className="col-sm-5 mt-2">
      <br/>
           <label for="cars" id='label'>Status:</label>
         <br/>  
     <select valueType={data.status} class="form-select" aria-label="Default select example" name="status"onChange={inputChangeHandler}>
      <option selected disabled>Choose Status Type</option>
      <option valueType="selected">Select</option>
      <option valueType="notselected">NotSelected</option>
      <option valueType="waiting">Waiting</option>
      
    </select>
    </div> */}

          <div className="col-sm-6 mt-2">

            <label for="cars" id='label'>Comments:</label>

            <div className="col-sm-8 mt-1">
              <textarea value={data.comment} class="form-control" id="exampleFormControlTextarea1" rows="3" name="comment" onChange={inputChangeHandler}></textarea>
            </div>
          </div>

        </div>
        <button onClick={submitHandler} className="btn btn-primary mt-4">Save</button>
      </div>
    </div>

  )
};

export default FixingInterviewOnline;