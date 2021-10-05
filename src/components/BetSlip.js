import React from "react";
import QRCode from "qrcode.react";
import useSWR, { mutate } from "swr";

const BetSlip = ({ proposition, address, status, ...props }) => {
  
  const payout_address = localStorage.getItem("bwx_address");
  console.log(payout_address);

  const renderPayoutAddress = () => {
    if (payout_address === "" || payout_address === undefined) {
      return (
        <div className="alert alert-danger">
          You have not entered a payout address!  <a href="/payout">Click here to set.</a>
        </div>
      );
    } else {
      return (
        <div className="alert alert-info">Your payout address is {payout_address}</div>
      );
    }
  };

  const paymentAddress = (address) => {
    const url = `${address}`;
    return(<QRCode value={url}></QRCode>)
  }

  const renderWagerSatus = (status) => {
      if (status === "unpaid") {
        return (
          <div className="alert alert-danger">
            Status: Unpaid.  No bitcoin payment has been received. Once we have received a payment to this
            address your wager will be placed.
          </div>
        )
      }
      
      if (status === "placed") {
        return (
          <div className="alert alert-success">
            Status: Your bet is now confirmed!
          </div>
        )
      }
  }

  return (
    <div className="container">

      { renderWagerSatus(status) }

      <div className="card">
        <div className="card-header">Bet Slip for {proposition}</div>
        <div className="card-body">
          <h5 className="card-title">Payment Address: {address}</h5>
          <p className="card-text">
            Your unique bitcoin address for this wager is <b>{address}</b>.  You can view the status of your bet at any time by visiting this page.  All winning wages will be paid to { payout_address }
          </p>

          { paymentAddress(address) }
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
