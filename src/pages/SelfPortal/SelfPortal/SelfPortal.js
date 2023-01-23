import axios from "axios";
import React, { useState } from "react";
import classes from "./SelfPortal.module.css";
function SelfPortal() {
  
  const [data, setData] = useState({

  });
  function handleInput(e) {
    e.preventDefault();
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
 
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post(url, {
    //     branch_name: data.branch_name,
    //     add_branch: data.add_branch,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    fetch("http://localhost:8080/travelOverview",{
      method:"POST",
      headers:{"Content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("Raise Grievances Accepted")

    })
  };

  return (
    <form className="form-control py-5 px-5 mx-2" onSubmit={handleSubmit}>
      <p className={classes.header}>
        Branch Master
        <input
          onChange={handleInput}
          value={data.branchMaster}
          name="branchMaster"
          className="mx-5"
          type="text"
          placeholder="Add Branch"
        />
      </p>
      <div className={classes.form}>
        <label className="h2 px-5 mx-5 mt-3 ">Search Branch Name</label>
        <input
          value={data.searchBranchName}
          className={classes.input}
          onChange={handleInput}
          type="text"
          name="searchBranchName"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="submit" className="btn btn-info mx-1 ">View All</button>
      </div>
    </form>
  );
}

export default SelfPortal;
