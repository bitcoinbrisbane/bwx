import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { history } from "../Router";
import bwx from "../apis/bwx";

const Runners = ({ data, date, mnemonic, id, ...props }) => {

  const handleClick = async (date, mnemonic, id, proposition, runner, type, event) => {

    const _payout = localStorage.getItem("bwx_address");

    const values = {
      coin: "bch",
      date: new Date(date).toISOString(),
      mnemonic: mnemonic,
      payoutaddress: _payout,
      proposition: proposition,
      raceid: parseInt(id, 10),
      runner: runner,
      type: type
    };

    console.log(values);

    const url = "/betslip";
    const result = await bwx.open.post(url, values);

    history.push(`/betslip/${result.data}`);
  };

  console.log(date);

  return (
    <div>
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>#</th>
            <th>Runner</th>
            <th>Rider</th>
            <th>Weight</th>
            <th>Win</th>
            <th>Place</th>
          </tr>
          {data.runners.map(runner => (
            <tr key={runner.name}>
              <td>{runner.number}</td>
              <td>
                {runner.name} ({runner.barrierNumber})
              </td>
              <td>{runner.riderDriverName}</td>
              <td>{runner.handicapWeight} kg</td>
              <td>
                <Button
                  variant="primary"
                  block="true"
                  onClick={e =>
                    handleClick(date, mnemonic, id, runner.fixedOdds.propositionNumber, runner.number, "win", e)
                  }
                >
                  {runner.fixedOdds.returnWin}
                </Button>
              </td>
              <td>
                <Button
                  variant="primary"
                  block="true"
                  onClick={e =>
                    handleClick(date, mnemonic, id, runner.fixedOdds.propositionNumber, runner.number, "place", e)
                  }
                >
                  {runner.fixedOdds.returnPlace}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <Modal isOpen={isOpen} onDismiss={onDismiss}>
      </Modal> */}


    </div>
  );
};

export default Runners;
