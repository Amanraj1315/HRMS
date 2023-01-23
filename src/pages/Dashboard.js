import React, { useEffect, useState } from "react";
import Card from "././Dashboard/Card/Card";
import pic from "../components/img/pic.png";
import Calender from "./Dashboard/Calender/Calender";
import DasNav from "./Dashboard/Navbar/DasNav";
import "./dashboard.css";
import { NavItem } from "react-bootstrap";

function Dashboard() {
  const [data, setData] = useState([]);
  let ln = 0;
  const options = { method: "GET" };
  useEffect(() => {
    fetch("http://localhost:8080/basic/fetchdata", options)
      .then((response) => response.json())
      .then((response) => setData(response))

      .catch((err) => console.error(err));
  }, []);

  data.forEach(myFunction);

  function myFunction(item) {
    ln++;
  }
  console.log(data);
  // const ln = setData.length;
  console.log(ln);
  return (
    <div style={{ maxwidth: "100vw" }}>
      <DasNav />

      <div
        className="carddisplay"
        style={{
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          objectFit: "contain",
        }}
      >
        <Card img={pic} title="Permanent Employee" number={ln} />
        <Card img={pic} title="Under Probation Employee" number="0" />
        {/* <Card img={pic} title="Permanent Employee" number="2" /> */}
      </div>

      <Calender />
      {/* {data.map((item) => (
        <tr>
          <td>{item.employeeId}</td>
          
        </tr>
      ))} */}
    </div>
  );
}

export default Dashboard;