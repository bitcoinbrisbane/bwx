import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const HorseRacingMatrix = ({ data, ...props }) => {

  const asLocaltime = (raceTime) => {
    
    const _time = moment.utc(raceTime).local().format("H:mm");
    // console.log(moment.utc(raceTime).unix());
    // console.log(Date.now());

    if (Date.now() / 1000 > moment.utc(raceTime).unix()) {
      return "Completed";
    }

    return _time.toString();
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
                  <br></br>
                  {race.line2}
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
