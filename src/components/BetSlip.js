import React from "react";
import QRCode from "qrcode.react";
import useSWR, { mutate } from "swr";

const BetSlip = ({ proposition, address, status, ...props }) => {
  console.log(address);
  const { data, error } = useSWR(`/bet/status/${address}`);
  console.log(data);
  
  const payoutAddress = () => {
    const payout_address = localStorage.getItem("bwx_address");
    return payout_address;
  };

  const renderPayoutAddress = () => {
    const payout_address = payoutAddress();

    if (payout_address === "" || payout_address === undefined) {
      return (
        <div className="alert alert-danger">
          You have not entered a payout address!  Click here to set.
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

  const renderWagerSatus = () => {
    return (
      <div className="alert alert-danger">
        Status: Unpaid.  No bitcoin payment received. Once we have received a payment to this
        address your wager will be placed.
      </div>
    )
  }

  return (
    <div className="container">

      {/* { renderPayoutAddress() } */}

      { renderWagerSatus() }

      <div className="card">
        <div className="card-header">Bet Slip for {proposition}</div>
        <div className="card-body">
          <h5 className="card-title">Payment Address: {address}</h5>
          <p class="card-text">
            Your unique bitcoin address for this wager is <b>{address}</b>.  You can view the status of your bet at any time by visiting this page.  All winning wages will be paid to { payoutAddress() }
          </p>

          { paymentAddress(address) }
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
