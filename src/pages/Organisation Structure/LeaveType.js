import axios from "axios";
import React, { useEffect, useState } from "react";

const LeaveType = () => {
  const [show, setShow] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [data, setData] = useState({});

  let newData = {};

  const changeHandler = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    newData = { ...data };
    newData[fieldName] = fieldValue;
    setData(newData);
  };
  const deleteHandler = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8080/leave/leavetype/${id}`)
      .then((res) => console.log(res));
  };
  useEffect(() => {
    fetch("http://localhost:8080/leave/LeaveType")
      .then((res) => res.json())
      .then((value) => setContacts(value));
  }, [contacts]);
  const showHandler = (e) => {
    e.preventDefault();
    setShow(!show);
    console.log(show);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(data);
    fetch("http://localhost:8080/leave/LeaveType", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        console.log("OverTimeReport are added");
      });
  };

  return (
    <div className="app-container">
      <h4>Leave Type</h4>{" "}
      <button
        onClick={showHandler}
        type="submit"
        class="btn btn-primary sm-4 mt-2"
      >
        Add Leave Type
      </button>
      {show && (
        <form onSubmit={submitHandler}>
          <h4> Add Leave Type</h4>

          <label>Leave Type</label>
          <input
            className="form-control"
            type="text"
            name="leaveType"
            value={data.leaveType}
            required="required"
            placeholder="Enter a leavetype"
            onChange={changeHandler}
          />
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            value={data.description}
            name="description"
            required="required"
            placeholder="Enter a description"
            onChange={changeHandler}
          />
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </form>
      )}
      <hr />
      <table className="table" style={{ width: "78vw" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>LEAVE TYPE</th>
            <th>DESCRIPTION</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.id}</td>
              <td>{contact.leaveType}</td>
              <td>{contact.description}</td>
              <td>
                <button className="btn btn-outline-success">Edit</button>
              </td>
              <td>
                <button
                  onClick={(e) => deleteHandler(e, contact.id)}
                  className="btn btn-outline-danger"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default LeaveType;

// import React, { useState } from "react";

// const LeaveType = () => {

//   const [contacts, setContacts] = useState([]);
//   const [data, setData]=useState({

//   });

//     let newData={}

// const changeHandler=(event)=>{
//   const fieldName = event.target.getAttribute('name');
//   const fieldValue = event.target.value;
//  newData = {...data};
//  newData[fieldName]=fieldValue;
//  setData(newData);
// }

// const submitHandler=(event)=>{
//   event.preventDefault();
//   console.log(data);

//   const newContact = {
//     id: data.id,
//     leave_type: data.leave_type,
//     description: data.description,

//    };

//    const newContacts = [...contacts, newContact]

//    setContacts(newContacts)
//    console.log(contacts)

//    fetch("http://localhost:8080/LeaveType",{
//     method:"POST",
//     headers:{"content-Type": "application/json", "Accept": "application/json"},
//     body:JSON.stringify(data)
//   }).then(()=>{
//     console.log("LeaveType are added")})

//   };

//   return (
//     <div className="app-container">
//       <h2>Leave Type</h2>
//       <hr />
//       <table className="table" style={{width:'78vw'}}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>LEAVE TYPE</th>
//             <th>DESCRIPTION</th>
//           </tr>
//         </thead>
//         <tbody>
//         <tr>
//             <td>1</td>
//             <td>EL</td>
//             <td>Earning Leave</td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>TL</td>
//             <td>Transport Leave</td>
//           </tr>
//           <tr>
//             <td>3</td>
//             <td>id</td>
//             <td>Sick Leave</td>
//           </tr>
//           <tr>
//             <td>4</td>
//             <td>CL</td>
//             <td>Casual Leave</td>
//           </tr>

//         {contacts.map((contact)=> (
//                 <tr>
//                 <td>{contact.id}</td>
//                 <td>{contact.leave_type}</td>
//                 <td>{contact.description}</td>

//               </tr>
//             ))}

//         </tbody>
//       </table>

//       <h4> Add Leave Type</h4>
//     <form onSubmit={submitHandler}>
//       <input
//       type="text"
//       name="id"
//       required="required"
//       placeholder="Enter id"
//       onChange={changeHandler}
//       />
//       <input
//       type="text"
//       name="leave_type"
//       required="required"
//       placeholder="Enter a Leave Type"
//       onChange={changeHandler}
//       />
//       <input
//       type="text"
//       name="description"
//       required="required"
//       placeholder="Enter a description"
//       onChange={changeHandler}
//       />

//       <button type="submit">Add</button>
//     </form>

//     </div>
//   )
// }
// export default LeaveType;
