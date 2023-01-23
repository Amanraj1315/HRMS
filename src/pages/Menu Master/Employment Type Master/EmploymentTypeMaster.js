import MaterialTable from "@material-table/core";
import { useState } from "react";

const EmploymentTypeMaster = () => {
  const [data, setData] = useState({
    name: "",
  });
  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    // console.log(JSON.stringify(newData))
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    fetch("http://localhost:8080/saveemployement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("Employement Master Added");
      })
      .catch((err) => console.log(err));
  };

  //  const submitHandler=(e)=>{
  //     e.preventDefault();
  //  }
  const [ticketDetails, setTicketDetails] = useState([]);
  const options = { method: "GET" };

  fetch("http://localhost:8080/getallEmp", options)
    .then((response) => response.json())
    .then((response) => setTicketDetails(response))
    .catch((err) => console.error(err));

  return (
    <>
      <div className="container">
        <div className="d-flex">
          <h3>Employment Type Master</h3>
          {/* <button type="button" className="btn btn-primary sm-4 mt-2 mx-3">Add Employment Type</button> */}
        </div>
        <hr />
        <h5>Add Employment Type</h5>
        <form onSubmit={submitHandler} className="bg-light">
          <div className="row ">
            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
                Employment Type:
              </label>
              <br />
              <input
                value={data.employmentType}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                name="employmentType"
                onChange={inputChangeHandler}
              />
            </div>

            <div className="col-sm-6 mt-2">
              <label for="cars" id="label">
                Description:
              </label>
              <br />
              <input
                value={data.description}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                name="description"
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary  mt-4 ">
            Save
          </button>
        </form>
      </div>   <br/><br/>
      <MaterialTable
        columns={[
          {
            title: "Employment Type",
            field: "employmentType",
          },

          {
            title: "Description",
            field: "description",
          },
        ]}
        data={ticketDetails}
        title="Employment Record"
      />
    </>
  );
};

export default EmploymentTypeMaster;
