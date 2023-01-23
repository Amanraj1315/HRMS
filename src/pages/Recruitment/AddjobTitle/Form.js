import { useState } from "react";
// import { json } from "react-router-dom";

const AddJobTitle = () => {
  const [data, setData] = useState({
    jobTitles: '',
    id:''
  });
  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData)

  }
  const submitHandler = () => {
    console.log(JSON.stringify(data))
    fetch("http://localhost:8080/addjobtitle/save", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "appliction/json" },
      body: JSON.stringify(data)
    }).then(() => {
      console.log("AddJobTitle is added")
    })
  }



    return (
      <div className='container ' >
        <h3>Add Job Titles</h3>
        <div className='form-control '>
          <div className="row mx-2">
            <div className="col-sm-6">
              <label class="form-label">job Titles</label><br />
              <input value={data.jobTitles} type="text" className="form-control" id="formGroupExampleInput" name="jobTitles" onChange={inputChangeHandler} />
            </div>
            {/* <div className="col-sm-6">
              <label class="form-label">id</label><br />
              <input value={data.id} type="text" className="form-control" id="formGroupExampleInput" name="id" onChange={inputChangeHandler} />
            </div> */}
          </div>
          <button onClick={submitHandler} className="btn btn-primary btn-sm my-3 mx-5 ">Save</button>
        </div>

      </div>
    )
  }

  export default AddJobTitle