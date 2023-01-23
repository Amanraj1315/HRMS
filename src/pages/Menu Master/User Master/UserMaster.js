// import { formatMuiErrorMessage } from "@material-ui/utils";
import { useState, useEffect } from "react";

const AddUser = () => {
  const [show, setShow] = useState([]);
  const [itemshow, setItemshow] = useState([]);
  const [data, setData] = useState({});
  const [empName, setEmpName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  // console.log(empName,selectedId,"selectedId")
  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    if (e.target.name === "employeeName") {
      setEmpName(e.target.value);
    }
    if (e.target.name === "id") {
      setSelectedId(e.target.value);
    }
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(JSON.stringify(newData));
  };

  const fetchData1 = () => {
    fetch("http://localhost:8080/department/getall", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItemshow(data);
      });
  };
  const fetchData = () => {
    fetch("http://localhost:8080/basic/fetchdata", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShow(data);
      });
  };
  useEffect(() => {
    const myData = show?.filter((item) => item.employeeId == selectedId);

    console.log("my emp", myData[0]?.employeeName);
    setEmpName(myData[0]?.employeeName);
  }, [selectedId]);
  useEffect(() => {
    fetchData();
    fetchData1();
  }, []);
  console.log(show);
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Data Added Successfully");
    setData({});
    console.log(JSON.stringify(data));
    fetch("http://localhost:8080/usermaster/saveuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("User are Added");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <div className="d-flex">
          <h3>Add User</h3>
          {/* <button type="button" className="btn btn-primary sm-4 mt-2 mx-3">
            Add User Master
          </button> */}
        </div>
        <hr />
        <h6>Add/Edit User</h6>
        <form onSubmit={submitHandler} className="bg-light">
          <div className="row ">
            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
                Department Name:
              </label>
              <br />
              <select
                valueType={data.departmentName}
                class="form-select"
                aria-label="Default select example"
                name="departmentName"
                onChange={inputChangeHandler}
              >
                {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
                <option selected disabled>
                  Select Department
                </option>
                {itemshow.map((aman) => (
                  <option valueType={aman.departmentName}>
                    {aman.departmentName}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
                Employee Code:
              </label>
              <br />
              {/* <select
                valueType={data.employeeCode}
                class="form-select"
                aria-label="Default select example"
                name="employeeCode"
                onChange={inputChangeHandler}
              > */}
              {/* <select value={data.id } class="form-select" aria-label="Default select example" name="id" onChange={inputChangeHandler}> */}
              <select
                value={data.id}
                class="form-select"
                aria-label="Default select example"
                name="id"
                onChange={inputChangeHandler}
              >
                <option selected disabled>
                  Select Employee
                </option>
                {show.map((e) => (
                  <option valueType={e.employeeId}>{e.employeeId}</option>
                ))}
              </select>
              {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
              {/* <option selected disabled>
                  Select Employee Code
                </option>
                {show.map(saurabh=>( <option valueType={saurabh.employeeId}>{saurabh.employeeId}</option>))} */}

              {/* </select> */}
            </div>

            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
                Employee Name:
              </label>
              <br />
              <select
                value={empName}
                className="form-select"
                aria-label="Default select example"
                name="employeeName"
                onChange={inputChangeHandler}
              >
                {show.map((e) => (
                  <option valueType={e.employeeName}>{e.employeeName}</option>
                ))}
              </select>
              {/* <select
                valueType={data.employeeName}
                class="form-select"
                aria-label="Default select example"
                name="employeeName"
                onChange={inputChangeHandler}
              >
                {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
              {/* <option selected disabled>
                  Select Employee Name
                </option>
               {show.map(saurabh=>( <option valueType={saurabh.employeeName}>{saurabh.employeeName}</option>))}
               
              </select> */}
            </div>

            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
                User Name:
              </label>
              <br />
              <input
                value={data.userName}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                name="userName"
                onChange={inputChangeHandler}
                required
                placeholder="Enter Username"
              />
            </div>

            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
                Password:
              </label>
              <br />
              <input
                value={data.password}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                name="password"
                onChange={inputChangeHandler}
                required
                placeholder="Enter Password"
              />
            </div>

            <div className="col-sm-4 mt-2">
              <label for="cars" id="label">
                Role Type:
              </label>
              <br />
              <select
                valueType={data.roleName}
                class="form-select"
                aria-label="Default select example"
                name="roleName"
                onChange={inputChangeHandler}
              >
                {/* <input value={data.name} type="text" class="form-control" id="formGroupExampleInput" name="name" onChange={inputChangeHandler}/> */}
                <option selected disabled>
                  Select Role
                </option>
                <option valueType="react JS">ADMIN</option>
                <option valueType="java">EMPLOYEE</option>
                <option valueType="java">User</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-4">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
