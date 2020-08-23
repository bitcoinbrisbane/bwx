import React from "react";
//import Table from "./Table";
//import { Link } from "react-router-dom";

const Race = ({ data, ...props }) => (
  <div>
    <table className="table table-striped">
      <tbody>
        { data.meets.map(meet => (
          <tr key={meet.location}>
            <td>{meet.name} ({meet.location})</td>
            
            { meet.races.map(race => (
              <td>R{race.index}</td>
            ))}

          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Race;
