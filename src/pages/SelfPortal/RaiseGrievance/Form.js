import axios from "axios";
import React, { useState } from "react";

function Form() {
  const url = "";
  const [data, setData] = useState({
    grievance: "",
    title: "",
    attachment: "",
    description: "",
  });
  function handleInput(e) {
    e.preventDefault();
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    
  }
  const handleSubmit = (e) => {
    console.log(JSON.stringify(data));
    e.preventDefault();
    // axios
      // .post(url, {
      //   grievance: data.grievance,
      //   title: data.title,
      //   attachment: data.attachment,
      //   description: data.description,
      // })
      // .then((res) => {
      //   console.log(res.data);
      // });
      fetch("http://localhost:8080/RaiseGrievances/post",{
          method:"POST",
          headers:{"Content-Type":"application/json","Accept":"application/json"},
          body:JSON.stringify(data)
        }).then(()=>{
          console.log("Raise Grievances Accepted")
    
        })
  };

  const options = [
    { value: "", text: "--Choose an option--", disabled: false },
    { value: "apple", text: "Individual Grievances" },
    { value: "banana", text: "Group Grievances" },
    { value: "kiwi", text: "Union Grievances" },
  ];

  return (
    <form onSubmit={handleSubmit} className="py-4">
      <div className="row mb-3 d-flex justify-content-between">
        <div className="col-sm-3 mx-4">
          <label for="exampleFormControlInput1" className="form-label ">
            Grievance Type:
          </label>
          <br />
          <select
            className="form-control"
            onChange={handleInput}
            value={data.grievanceType}
            name="grievanceType"
          >
            {options.map((option) => (
              <option
                disabled={option.disabled}
                key={option.value}
                value={option.value}
              >
                {option.text}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-3 ">
          <label for="exampleFormControlInput1" className="form-label">
            TItle:
          </label>
          <input
            onChange={handleInput}
            value={data.title}
            name="title"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="col-sm-4 mx-5 px-2">
          <label for="formFile" className="form-label">
            Upload Attachment:
          </label>
          <input
            onChange={handleInput}
            value={data.uploadAttechment}
            name="uploadAttechment"
            className="form-control"
            type="file"
            id="formFile"
          />
        </div>
      </div>
      <div className="mb-1 row ">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          <label for="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            onChange={handleInput}
            value={data.description}
            name="description"
            className="form-control  "
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="col-sm-1"></div>
      </div>
      
      <button className="btn btn-outline-success px-5 mx-5 btn-lg mt-4">Save</button>
    </form>
  );
}

export default Form;
