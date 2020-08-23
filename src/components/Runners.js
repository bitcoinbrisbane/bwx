import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { history } from "../components/Router";

const Runners = ({ data, mnemonic, id, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(true);

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
                
                <Button variant="primary" block="true" onClick={() => history.push(`/betslip/${mnemonic}/${id}/${runner.number}`)}>{runner.fixedOdds.returnWin}</Button>
              </td>
              <td>
                {/* <Button variant="primary" onClick={() => handleClick()}>
                  {runner.fixedOdds.returnPlace}
                </Button> */}

                <Button variant="primary" block="true" onClick={() => history.push("/betslip")}>{runner.fixedOdds.returnPlace}</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Runners;
