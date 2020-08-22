import React from "react";

const Runners = ({ data, ...props }) => (
  <div>
    <table className="table table-striped">
      <tbody>
        { data.runners.map(runner => (
          <tr key={runner.name}>
            <td>{runner.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Runners;
