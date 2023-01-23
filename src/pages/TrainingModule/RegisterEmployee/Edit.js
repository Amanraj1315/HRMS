import React from 'react'
// import styles from './Edit.module.css'
import { AiFillSave,AiOutlineRollback } from 'react-icons/ai';


 const Edit=()=>{
    return(
        <div style={{
            
        }}>
<form>
  
  <div class="segment">
    <h1>Edit Employee Dets</h1>
  </div>
  <label>
    <input type="text" placeholder="Training Name"/>
  </label>
  <label>
    <input type="text" placeholder="Employee Name"/>
  </label>
  <div class="segment">
    <button class="unit" type="button"><AiOutlineRollback/>Back</button>
    <button style={{position: 'absolute',marginLeft: '10%'}} class="unit saveButton" type="button"><AiFillSave/>Save</button>
  </div>
</form>
        </div>
    )
 }
 export default Edit