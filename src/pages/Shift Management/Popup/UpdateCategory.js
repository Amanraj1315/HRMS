import React, { useState } from 'react'
import '../View Employee Shift/Modal.css';

const UpdateCategory = (props) => {
  console.log(props.id)
    const [name, setName] = useState('');

    const handleChange = (event) => {
      setName(event.target.value);
      console.log(name)
    }
  
  
    async function postHandle() {
       await fetch(`https://staging.jobportalapi.atwpl.com//adminportal/JobCategories/`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({
            "id":props.id,
            "category_name": name }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))

          props.fetchData();
      }
    
    return (
        <div className='blur-screen flex-center'>
            <div className='addCategory position-relative'>



                <div className='modl address-textfield'>
                <div className='address-textfield-in'>
                <h2 className='address-textfield-in-heading'>Edit      <span  onClick={props.closePopup} style={{margin:"0px 0px 0px 70%",color:"#000000", cursor:"pointer", fontSize:"14px"}}>╳</span></h2>
                <input  type="text" onChange={handleChange} value={name} placeholder="Employee Name..." /> <br />
                <input  type="text" onChange={handleChange} value={name} placeholder="Shift..." /> <br />
                <input  type="Date" onChange={handleChange} value={name} /> <br />
                <div className=' flex-center justify-content-between'>
                    <button className="btn btn-md btn-danger admin-outline-dark mt-3 " onClick={props.closePopup}>Cancel</button>
                    <button className="btn admin-btn btn-md btn-success mt-3 " onClick={()=>{postHandle();props.closePopup()}} >Save</button>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCategory