import axios from "axios";
import { useState } from "react";

const Edit=(props)=>{
const [data,setData]=useState({

})
const submitHandler=(e,id)=>{
    e.preventDefault();
  
    console.log(data)

    axios.put(`http://localhost:8080/update/${props.value}`,{  date: data.date,
    employee: data.name,  
    shiftName: data.shift,
  }).then(res=>console.log(res)) 
}
const inputChangeHandler=(e)=>{
    let newData={...data};
    newData[e.target.name]=e.target.value;
    setData(newData)
 }


    return(    <form onSubmit={submitHandler}>
        <label>Date</label>
        <input onChange={inputChangeHandler} value={data.date} name='date' type='date'/>
        <label>Employee Name</label>
        <input  onChange={inputChangeHandler} value={data.name} name='name' type='text'/>
        <label>Shift</label>
        <input  onChange={inputChangeHandler} value={data.shift} name='shift' type='text'/>
        <button type="submit">Submit</button>
    </form>)

}
export default Edit;