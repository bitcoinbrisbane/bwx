import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

const BetSlip = ({ proposition, id, ...props }) => {
  const payoutAddress = () => {
    const address = localStorage.getItem("bwx_address");
    if (address === "" || address === undefined) {
      return (
        <div className="alert alert-danger">
          You have not entered a payout address!
        </div>
      );
    } else {
      return (
        <div className="alert alert-info">Your payout address is {address}</div>
      );
    }
  };

  return (
    <div className="container">
      <h2>Bet Slip</h2>

      <div className="alert alert-danger">
        No bitcoin payment received. Once we have received a payment to this
        address your wager will be placed.
      </div>

      <div className="card">
        <div class="card-header">ID: {id}</div>
        <div className="card-body">
          <h5 className="card-title">{proposition}</h5>
          <p class="card-text">
            Your unique bitcoin address for this page is.  You can view the status of your bet at any time.  Betting closes at 
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="panel panel-default">
        <div className="panel-body">
          <h3>Details</h3>
          <div className="alert alert-info">{proposition}</div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
