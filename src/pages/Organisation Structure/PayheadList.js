import axios from "axios";
import React, { useEffect, useState } from "react";

const PayheadList = () => {

  const [show, setShow] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [data, setData]=useState({

  });
  
    let newData={}
  
const changeHandler=(event)=>{
  const fieldName = event.target.getAttribute('name');
  const fieldValue = event.target.value;
 newData = {...data};
 newData[fieldName]=fieldValue;
 setData(newData);
}
const deleteHandler=(e,id)=>{
  e.preventDefault()
  axios.delete(`http://localhost:8080/payHead/deletepayheadmaster/${id}`).then(res=>console.log(res))
}

useEffect(()=>{
  
  fetch("http://localhost:8080/payHead/PayheadMasterDetail").then(res=>res.json()).then(value=>setContacts(value))
},[contacts])

const showHandler=(e)=>{
  e.preventDefault();
  setShow(!show);
  console.log(show)
}

const submitHandler=(event)=>{
  event.preventDefault();
  console.log(data);
  fetch("http://localhost:8080/payHead/PayheadMaster",{
      method:"POST",
      headers:{"content-Type": "application/json", "Accept": "application/json"},
      body:JSON.stringify(data)
    }).then((response) => response.json()).then(()=>{
      console.log("OverTimeReport are added")})
 


  };

    return <>
    <div className="app-container">
      <h4>Payhead Master</h4>   <button onClick={showHandler} type="submit" class="btn btn-primary sm-4 mt-2">Add Payhead List</button>
  
{show&&      <form onSubmit={submitHandler}>
        
  <h4> Add Payhead List</h4>
   
    <label>payhead</label>
      <input 
      className="form-control"
      type="text" 
      name="payhead" 
      value={data.payhead}
      required="required" 
      placeholder="Enter a Payhead"
      onChange={changeHandler}
      />
    <label>type</label>
      <input 
       className="form-control"
      type="text" 
      name="type" 
      value={data.type}
      required="required" 
      placeholder="Enter a Type"
      onChange={changeHandler}
      />
    <label>shortCode</label>
      <input 
      type="text" 
      className="form-control"
      value={data.shortCode}
      name="shortCode" 
      required="required" 
      placeholder="Enter a Short Code"
      onChange={changeHandler}
      />
    <label>calculatedType</label>
      <input 
       className="form-control"
      type="text" 
      value={data.calculatedType}
      name="calculatedType" 
      required="required" 
      placeholder="Enter a calculated type"
      onChange={changeHandler}
      />

<label>value</label>
      <input 
      type="text" 
      className="form-control"
      value={data.value}
      name="value" 
      required="required" 
      placeholder="Enter a value"
      onChange={changeHandler}
      />
      
      <button className="btn btn-success" type="submit">Add</button>
    </form>
    }
    <hr/>
    
      <table style={{width:'75vw'}} className="table  table-striped table-hover">
    <thead>
      <tr>
        <th >ID</th>
        <th >Payhead List</th>
        <th >Type</th>
        <th >Short Code</th>
        <th >Calculated Type</th>
        <th >Value</th>
        <th >Edit</th>
        <th >Delete</th>
      </tr>
    </thead>
    <tbody>
      
  
    
      {contacts.map((contact)=> (
                <tr>
                <td>{contact.id}</td>
                <td>{contact.payhead}</td>
                <td>{contact.type}</td>
                <td>{contact.shortCode}</td>
                <td>{contact.calculatedType}</td>
                <td>{contact.value}</td>
                <td><button className="btn btn-outline-success">Edit</button></td>
                <td><button onClick={(e)=>deleteHandler(e,contact.id)} className="btn btn-outline-danger">delete</button></td>
               
              </tr>
            ))}
      
    </tbody>
  </table>

   
    </div>
    </>
    }
    
    export default PayheadList;








// import React, { useState } from "react";

// const PayheadList = () => {

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
 

 
  

//     const newContact = {
//       id: data.id,
//       payhead: data.payhead,
//       type: data.type,
//       shortCode: data.shortCode,
//       calculatedType: data.calculatedType,
//       value: data.value,

     
     
//      };
//     const newContacts = [...contacts, newContact]
   
//    setContacts(newContacts)
//    console.log(contacts)

//    fetch("http://localhost:8080/PayheadMaster",{
//     method:"POST",
//     headers:{"content-Type": "application/json", "Accept": "application/json"},
//     body:JSON.stringify(data)
//   }).then(()=>{
//     console.log("payheadlist are added")})

//   };

//     return (
//     <div className="app-container">
//       <h4>Payhead Master</h4>   <button type="button" class="btn btn-primary sm-4 mt-2">Add Payhead List</button>
//       <hr />
//       <table style={{width:'75vw'}} className="table  table-striped table-hover">
//     <thead>
//       <tr>
//         <th >ID</th>
//         <th >Payhead List</th>
//         <th >Type</th>
//         <th >Short Code</th>
//         <th >Calculated Type</th>
//         <th >Value</th>
//         {/* <th >EDIT</th> */}
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>1</td>
//         <td>Over Time</td>
//         <td>Other Income</td>
//         <td>OT</td>
//         <td>Calculated</td>
//         <td>value</td>
//         {/* <td><button className="btn btn-outline-primary">Edit</button></td> */}
//       </tr>
  
//       <tr>
//         <td data-label="id">2</td>
//         <td data-label="Payhead">Advance Amount</td>
//         <td data-label="Type">Other Deduction</td>
//         <td data-label="Short Code">Advance Am</td>
//         <td data-label="Calculated Type">fixed</td>
//         <td data-label="Value(%)"></td>
//         {/* <td data-label="Edit"><button className="btn btn-outline-primary">Edit</button></td> */}
//       </tr>
  
//       <tr>
//         <td data-label="id">3</td>
//         <td data-label="Payhead">ESI</td>
//         <td data-label="Type">Deduction</td>
//         <td data-label="Short Code">ESI</td>
//         <td data-label="Calculated Type">Calculated</td>
//         <td data-label="Value">0.75</td>
//         {/* <td data-label="Edit"><button className="btn btn-outline-primary">Edit</button></td> */}
//       </tr>
  
//       <tr>
//         <td data-label="id">4</td>
//         <td data-label="Payhead">EPF</td>
//         <td data-label="Type">Deduction</td>
//         <td data-label="Short Code">EPF</td>
//         <td data-label="Calculated Type">Calculated</td>
//         <td data-label="Value">12</td>
//         {/* <td data-label="Edit"><button className="btn btn-outline-primary">Edit</button></td> */}
//       </tr>
  
//       <tr>
//         <td data-label="id">5</td>
//         <td data-label="Payhead">Other Allowances</td>
//         <td data-label="Type">Earning</td>
//         <td data-label="Short Code">Others</td>
//         <td data-label="Calculated Type">Calculated</td>
//         <td data-label="Value"></td>
//         {/* <td data-label="Edit"><button className="btn btn-outline-primary">Edit</button></td> */}
//       </tr>
  
  
//       <tr>
//         <td data-label="id">6</td>
//         <td data-label="Payhead">HRA</td>
//         <td data-label="Type">Earning</td>
//         <td data-label="Short Code">HRA</td>
//         <td data-label="Calculated Type">Calculated</td>
//         <td data-label="Value">12</td>
//         {/* <td data-label="Edit"><button className="btn btn-outline-primary">Edit</button></td> */}
//       </tr>
  
//       <tr>
//         <td data-label="id">7</td>
//         <td data-label="Payhead">Basic Wages</td>
//         <td data-label="Type">Earning</td>
//         <td data-label="Short Code">Basic Wages</td>
//         <td data-label="Calculated Type">fixed</td>
//         <td data-label="Value"></td>
//         {/* <td data-label="Edit"><button className="btn btn-outline-primary">Edit</button></td> */}
//       </tr>

//       {contacts.map((contact)=> (
//                 <tr>
//                 <td>{contact.id}</td>
//                 <td>{contact.payhead}</td>
//                 <td>{contact.type}</td>
//                 <td>{contact.shortCode}</td>
//                 <td>{contact.calculatedType}</td>
//                 <td>{contact.value}</td>
               
//               </tr>
//             ))}
      
//     </tbody>
//   </table>

//   <h4> Add Payhead List</h4>
//     <form onSubmit={submitHandler}>
//     <input 
//       type="text" 
//       // value={data.id}
//       name="id" 
//       required="required" 
//       placeholder="Enter ID"
//       onChange={changeHandler}
//       />

//       <input 
//       type="text" 
//       name="payhead" 
//       // value={data.payhead}
//       required="required" 
//       placeholder="Enter a Payhead"
//       onChange={changeHandler}
//       />

//       <input 
//       type="text" 
//       name="type" 
//       // value={data.type}
//       required="required" 
//       placeholder="Enter a Type"
//       onChange={changeHandler}
//       />

//       <input 
//       type="text" 
//       // value={data.shortCode}
//       name="shortCode" 
//       required="required" 
//       placeholder="Enter a Short Code"
//       onChange={changeHandler}
//       />

//       <input 
//       type="text" 
//       // value={data.calculatedType}
//       name="calculatedType" 
//       required="required" 
//       placeholder="Enter a calculated type"
//       onChange={changeHandler}
//       />


//       <input 
//       type="text" 
//       // value={data.value}
//       name="value" 
//       required="required" 
//       placeholder="Enter a value"
//       onChange={changeHandler}
//       />
      
//       <button type="submit">Add</button>
//     </form>
//     </div>
//     )
//     }
    
//     export default PayheadList;







































