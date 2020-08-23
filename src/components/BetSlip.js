import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
//import Button from 'react-bootstrap/Button';
//import QRCode from 'qrcode.react';

export class BetSlip extends Component {
  //console.log(props.match.params.id);

  constructor(props) {
    super(props);

    this.state = {
      odds: 0.0,
      loading: true,
      payout_address: "1DugongACGcyyvvgvcy8skYyezsx5jy3aV",
      address: "NA",
      show: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: true });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const betslip = {
      Coin: "BTC",
      EventId: 29620971,
      SelectionId: 1,
      Odds: 2.1,
    };

    fetch("/horse/quote", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(betslip),
    })
      .then((response) => response.json())
      .then((data) => {
        //alert('Address: ' + data.address);
        console.log(data);
        this.setState({ address: data.address });
        this.setState({ show: true });
        this.setState({ viewModel: data, loading: false });
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Bet slip: {this.state.address}</h2>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="alert alert-info">
              You're betting on xxx to win @ {this.state.odds}. Your estimated
              payout will be displayed on the next page.
            </div>

            <h3>Payout Address</h3>

            <form onSubmit={this.handleSubmit}>
              <div clas="form-group">
                <label>
                  Enter your bitcoin address where you will receive payouts.
                  Please make sure you are in control of this address and do not
                  use an exchange address.
                </label>
                <input
                  id="payout"
                  className="form-control"
                  value={this.state.address}
                  onChange={this.handleChange}
                ></input>
              </div>
              <hr />
              <button type="submit" className="btn btn-primary">
                Get Payment Address
              </button>
            </form>

            {/* <QRCode value='bitcoin://3MpGFSaRMNsrj3UG1BSM5fEef7GFaqpxhJ' /> */}
          </div>
        </div>

        <Modal show={this.state.show} onClick={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Bitcoin Payment Address</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              To complete your wager send your wager amount in bitcoin (BTC) to{" "}
              <b>{this.state.address}</b>. This is a unique anonymous address
              for this wager. Once received with 1 confirmation your wager will
              be placed.
            </p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
