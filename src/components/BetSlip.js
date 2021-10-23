import React from "react";
import QRCode from "qrcode.react";

const BetSlip = ({ proposition, address, status, ...props }) => {
  
  const payout_address = localStorage.getItem("bwx_address");
  console.log(payout_address);

  // const renderPayoutAddress = () => {
  //   if (payout_address === "" || payout_address === undefined) {
  //     return (
  //       <div className="alert alert-danger">
  //         You have not entered a payout address!  <a href="/payout">Click here to set.</a>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="alert alert-info">Your payout address is {payout_address}</div>
  //     );
  //   }
  // };

  const paymentAddress = (address) => {
    const url = `${address}`;
    return(<QRCode value={url}></QRCode>)
  }

  const renderWagerSatus = (status) => {
      switch(status) {
        case "unpaid":
          // code block
          return (
            <div className="alert alert-warning">
              Status: Unpaid.  No bitcoin payment has been received. Once we have received a payment to this
              address your wager will be placed.
            </div>
          )
        case "placed":
          return (
            <div className="alert alert-info">
              Status: Your bet is now placed.  Good luck!
            </div>
          )
        case "won":
          return (
            <div className="alert alert-success">
              Status: Your bet won!
            </div>
          )
        case "lost":
          return (
            <div className="alert alert-danger">
              Status: Your bet did not win.
            </div>
          )
        case "pending":
          return (
            <div className="alert alert-info">
              Status: Your bet is pending an offical result.
            </div>
          )
        case "settled":
          return (
            <div className="alert alert-success">
              Status: Your bet has been settled.  Please check your payout address.
            </div>
          )
        default:
          <div className="alert alert-info">
            Error: {status}
          </div>
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
        {/* <Button>Close</Button> */}
      </div>
    </div>
  );
};

export default BetSlip;
