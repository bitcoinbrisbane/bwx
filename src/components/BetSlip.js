import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

const BetSlip = ({ data, ...props }) => {
  return (
    <div className="container">
      <h2>Bet Slip</h2>
      <div className="panel panel-default">
        <div className="panel-body">

          <h3>Status</h3>
          <div className="alert alert-danger">
            You have not entered a payout address.
          </div>

          <div className="alert alert-info">
            You're betting on xxx to win @ . Your estimated payout will be displayed on the next page.
          </div>

          <h3>Payout Address</h3>

          <form>
            <div clas="form-group">
              <label>
                Enter your bitcoin address where you will receive payouts.
                Please make sure you are in control of this address and do not
                use an exchange address.
              </label>
              <input
                id="payout"
                className="form-control"
              ></input>
            </div>
            <hr />
            <button type="submit" className="btn btn-primary">
              Get Payment Address
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
