import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const HorseRacingMatrix = ({ data, ...props }) => {

  const asLocaltime = (raceTime) => {
    const _time = moment.utc(raceTime).local().format("H:mm");

    if (Date.now() > _time) {
      return "Completed";
    }

    return _time.toString(); //moment.utc(raceTime).local().format("H:mm");
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
                  {
                    asLocaltime(race.line1)
                  }
                  {/* { moment.utc(race.line1).local().format("H:mm") } */}
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
