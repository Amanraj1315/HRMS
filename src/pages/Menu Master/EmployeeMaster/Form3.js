import MaterialTable from "@material-table/core";
import React, { useEffect, useState } from "react";
// import { Modal } from "react-bootstrap";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

const Form3 = () => {
  const [userModal, setUserModal] = useState(false);
  const [data, setData] = useState([]);
  const [ticketDetails, setTicketDetails] = useState([]);

  const showUserModal = () => {
    setUserModal(true);
  };
  const closeUserModal = () => {
    setUserModal(false);
  };

  // const fetchData=()=>{

  // fetch("http://localhost:8080/basic/fetchdata",{
  //   method: 'GET',
  //   headers : {
  //         'Accept' : 'application/json',
  //         'Authorization': `Bearer $ token `

  //   },
  // })
  // .then((response)=> response.json())
  // .then((response)=> setData((response.data)))
  // .catch((data) => console.log(data))

  // .then((response)=>{
  //   return response.json();
  // })
  // .then((data)=>{
  //   // console.log(data);
  //   let gagan = data
  //   // console.log(gagan)
  //   setShow()
  // })

  // }
  // useEffect(()=>{
  //   console.log(data);
  // },[data])

  const fetchData = () => {
    fetch("http://localhost:8080/basic/fetchdata", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setTicketDetails(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    <>
      <MaterialTable
        columns={[
          {
            title: "Employee Name",
            field: "employeeName",
          },
          {
            title: "Employee Code",
            field: "employeeId",
          },
          {
            title: "Department Name",
            field: "selectDepartment",
          },
          {
            title: "Email Id",
            field: "email",
          },
          {
            title: "Designation",
            field: "designation",
          },
          {
            title: "Work Type",
            field: "workType",
          },
          {
            title: "Reported To",
            field: "reportingTo",
          },
        ]}
        // data={[
        //   {
        //     EmplyoyeeName: "Piyush",
        //     EmplyoyeeCode: 125,
        //     DepartmentName: "HR",
        //     EmailId: "asd@gmai.com",
        //     Designation: "User",
        //   },
        // ]}
        data={ticketDetails}
        options={{
          // filtering: true,
          // sorting: true,
          exportMenu: [
            {
              label: "Export PDF",
              exportFunc: (cols, datas) =>
                ExportPdf(cols, datas, "UserRecords"),
            },
            {
              label: "Export CSV",
              exportFunc: (cols, datas) =>
                ExportCsv(cols, datas, "userRecords"),
            },
          ],
          headerStyle: {
            backgroundColor: "darkblue",
            color: "#FFF",
          },
          rowStyle: {
            backgroundColor: "#EEE",
          },
        }}
        title="Employee Record"
      />
      {/* <button className="btn btn-primary" onClick={showUserModal}>
        Open Modal
      </button>
      <Modal
        show={userModal}
        onHide={closeUserModal}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
      </Modal> */}
    </>
  );
};

export default Form3;
