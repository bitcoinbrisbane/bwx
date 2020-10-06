import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const HorseRacingMatrix = ({ data, ...props }) => {

  const asLocaltime = (raceTime) => {
    return moment.utc(raceTime).local().format("H:mm");
  }

  return (
    <div>
      <table className="table table-striped">
        <tbody>
          { data.meets.map(meet => (
            <tr key={meet.location}>
              <td>{meet.name} ({meet.location})</td>
              
              { meet.races.map(race => (
                <td>
                  <Link to={{ pathname: `/horses/${meet.mnemonic}/${race.index}` }}>R{race.index}</Link>
                  <br></br>
                  { asLocalTime(race.line1)}
                </td>
              ))}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HorseRacingMatrix;
