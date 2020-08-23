import React from "react";
import { Link } from "react-router-dom";

const HorseRacingMatrix = ({ data, ...props }) => (
  <div>
    <table className="table table-striped">
      <tbody>
        { data.meets.map(meet => (
          <tr key={meet.location}>
            <td>{meet.name} ({meet.location})</td>
            
            { meet.races.map(race => (
              <td>
                <Link to={{ pathname: `/horses/${meet.mnemonic}/${race.index}` }}>R{race.index}</Link>
              </td>
            ))}

          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default HorseRacingMatrix;
