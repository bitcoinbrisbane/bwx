import React from "react";
//import Table from "./Table";
//import { Link } from "react-router-dom";

const HorseRacingMatrix = ({ data, ...props }) => (
  <div>
    <h2>Today</h2>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Jump</th>
        </tr>
      </thead>
      <tbody>
        {data.meets.map(meet => (
          <tr key={meet.location}>
            <td>{meet.location}</td>
            {/* <td>
                <Link
                to={{
                    pathname: "/race/" + race.id
                }}
                >
                {race.name}
                </Link>
            </td>
            <td>{race.start}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default HorseRacingMatrix;
