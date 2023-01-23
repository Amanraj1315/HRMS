import React from "react";
import { Card } from "react-bootstrap";

function Tables(props) {
  return (
    <Card className="table-responsive ">
      <table className="table table-success table-striped ">
        <thead>
          <tr>
            <th>id</th>
            <th>JOb Title</th>
          </tr>
        </thead>
        <tbody>
          {props.val.map((item) => {
            <tr>{item}</tr>;
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default Tables;
