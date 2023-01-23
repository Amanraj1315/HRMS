import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
// import { propTypes } from "react-bootstrap/esm/Image";
import { Link, NavLink, useNavigate } from "react-router-dom";

const DasNav = () => {
  const location = useNavigate();
  const handleSubmit = () => {
    // e.preventDefault();
    sessionStorage.removeItem("token");
    // propTypes.history.push('/login');
    location("/");
  };
  // const logoutHandler=(e)=>{
  //     e.preventDefault();
  //     sessionStorage.setItem('token', null)
  //     location(-1)
  // }
  return (
    <div className="container4">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid homeBox">
          <h2>Dashboard</h2>
          <span class="navbar-text">
            Welcome <b>Admin</b>
          </span>
          <div
            style={{ width: "15%" }}
            className="d-flex justify-content-center"
          >
            {/* <NavLink style={{ color: "teal" }} to="/" className=" mt-1"> */}
            {/* <ButtonGroup>
              <Button variant="success" onClick={handleSubmit}>
                Log Out
              </Button>
            </ButtonGroup> */}
            <button
              type="button"
              class="btn btn-success"
              onClick={handleSubmit}
            >
              LOGOUT
            </button>

            {/* </NavLink> */}
          </div>
        </div>
      </nav>
      <br /> <br />
    </div>
  );
};

export default DasNav;
