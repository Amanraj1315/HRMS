import React, { useState } from 'react'

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

                <img src='./grey-cross.png' className="dismiss-popup" alt="" onClick={props.closePopup}/>
                <h4 className='heading text-center mb-3'>Edit</h4>
                <input  type="text" onChange={handleChange} value={name} placeholder="Categories tittle" className=" custom-input border-2 w-100 mb-3" /> <br />
                {/* <input type="file" className=" custom-input w-100"  /> <br /> */}
                <div className=' flex-center justify-content-between'>
                    <button className="btn admin-outline-dark mt-3 " onClick={props.closePopup}>Cancel</button>
                    <button className="btn admin-btn mt-3 " onClick={()=>{postHandle();props.closePopup()}} >Save</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateCategory