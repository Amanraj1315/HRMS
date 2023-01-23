import { useState } from 'react'
const Nav = () => {
    const [data, setData] = useState({

        name: ""
    });
    const inputChangeHandler = (e) => {
        let newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData)
        console.log(JSON.stringify(newData))
    }
    //  const submitHandler=(e)=>{
    //     e.preventDefault();
    //  }
    

    return (
        <>

        <div className="container" >
            <h2 className='d-flex justify-content-around'>
                <span >Employee Master</span>
                {/* <link className='link' to='/SubPages/AddEmployees'>Add Employee</link> */}
                </h2>
            <hr />
            {/* <div className="bg-light">
                <div className='row'>
                    <div className="col-sm-8 d-flex">
                        <label className="form-label mx-5 w-75 mt-3">Search Employee:</label>
                        <input value={data.Employee} type="text" class="form-control my-2" id="formGroupExampleInput" name='Employee' onChange={inputChangeHandler} />
                    </div>
                    <div className="col-sm-4 d-flex py-2">
                        <button className='btn btn-primary mx-2'>Submit</button>
                        <button className='btn btn-info '>View All</button>
                    </div>
                </div>
            </div> */}
        </div>
        </>

    )
}

export default Nav