import React from 'react'

const LeaveAproval = () => {
  return (
    <>
    <div className="container">
      <h4>Leave Aproval</h4>    
      <hr />
      <table style={{width:'75vw'}} className='table'>
    <caption>Showing Result 1 To 1 of 1</caption>
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Request By</th>
        <th scope="col">Leave Type</th>
        <th scope="col">Start Date</th>
        <th scope="col">End Date</th>
        <th scope="col">No. of days</th>
        <th scope="col">Reason</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="sl">1</td>
        <td data-label="Request By">RADHA</td>
        <td data-label="Leave Typ">CL</td>
        <td data-label="Start Date">24-10-2022</td>
        <td data-label="End Date">26-10-2022</td>
        <td data-label="No. of days">2</td>
        <td data-label="Reason">sick</td>
        <td data-label="Status">Pending</td>
      </tr>
  
      
      
    </tbody>
  </table>
    </div>
    </>
  )
}

export default LeaveAproval