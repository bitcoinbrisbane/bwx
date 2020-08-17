import React, { Component } from "react";

export class BetSlipAddress extends Component {
  static displayName = ""; //FetchMeets.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        <h2>Bet slip</h2>
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="alert alert-info">Step 2 of 2</div>

            <h3>Waiting for payment</h3>

            <form>
              <div clas="form-group">
                <label>
                  Your bitcoin address where you will receive payouts
                </label>
                <input id="payout" class="form-control"></input>
              </div>
              <hr></hr>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
