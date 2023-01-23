import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const UPLOAD_ENDPOINT =   "http://localhost:8080/attendance/upload";

  const handleSubmit = async e => {
    e.preventDefault();
  
    let res = await uploadFile(file);
    console.log(res.data);
  };

  const uploadFile = async file => {
    const formData = new FormData();
    formData.append("file", file,"filename");

    return await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',"Access-Control-Allow-Origin": "*",
            'Accept': 'application/json',
      }
    });
  };
  

  const handleOnChange = e => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const uploadMultiPartFile= async () => {
    try {
      // setLoading(true)
      const formData =new FormData();
      formData.append("file",file)
      const API_URL ="http://localhost:8080/attendance/upload"
      await axios.post(API_URL,formData);
      
    } catch (error) {
      alert(error.message)
    }
     };

  // console.log(show);
//   const submitHandler=(e)=>{
//     console.log(file +"=====","file");

//     e.preventDefault();
//     console.log(JSON.stringify({file}));
//      fetch('http://localhost:8080/attendance/upload', {

//             method: "POST",
//             headers: { 'Content-Type': 'multipart/form-data;  ',"Access-Control-Allow-Origin": "*",
//             'Accept': 'application/json; charset=UTF-8',
//            },           

//             body:JSON.stringify({ file : file}),
//         }).then(() => {
          
//             console.log("File Uploaded");
//         }).catch(err=>console.log(err));
// };

  return (
    <div className="container">
  <h4>Import Attendance</h4>
  <hr />
  <div className="bg-light">
  <div className="row "></div>
  
    <form onSubmit={handleSubmit}>
      <h1>Browse File</h1>
      <input className="form-control mt-4 " type="file" onChange={handleOnChange} />
      {/* <button className="btn btn-outline-success mt-4" type="submit">Upload File</button> */}
      <button onClick={uploadMultiPartFile} type="button" class="btn btn-primary  mt-4 ">Upload File</button>   

    </form>
    
    </div>
    
    </div>
  );
}

export default App;