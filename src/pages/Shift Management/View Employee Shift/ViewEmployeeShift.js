import React, { useState } from "react"; 
import Edit from "./Edit";
import Form2 from './Form2'


const ViewEmployeeShift = () => {
  // const [data, setData] = useState({});
  // const [show, setShow] = useState ([]);


  const[displayed,setDisplayed]=useState([]);
  const[value,setValue]=useState([]);
  // const inputChangeHandler = (e) => {
  //   let newData = { ...data };
  //   newData[e.target.name] = e.target.value;
  //   setData(newData)
  // }
  //  const submitHandler=(e)=>{
  //   console.log(JSON.stringify(data))
  //   console.log(value)
   
  //  }
   const handleClick =(val) =>{

  setValue(val)
}

const displayHandler=(display)=>{
  setDisplayed(display)
}
// useEffect(()=>{
//   console.log(data)
// },[])





  return (
    <div><div className="container">
      <h2>View Employees Duty</h2>
      <hr />
        {displayed&&<Edit value={value}/>}
    </div>

      <Form2 displayHandler={displayHandler} handleClick={handleClick}  />
    </div>

  )
}

export default ViewEmployeeShift