import React, { Component } from "react";
import Layout from "../components/Layout";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";

const PayoutAddressPage = () => {
  const formik = useFormik({
    initialValues: {
      payout: localStorage.getItem("bwx_address")
    },
    onSubmit: values => {
      localStorage.setItem("bwx_address", values.payout);
      alert("Your address " + values.payout + " has been saved locally.");
    }
  });

  const payoutAddress = () => {
    if (localStorage.getItem("bwx_address") === "" || localStorage.getItem("bwx_address") === undefined)
    {
      return (
        <div className="alert alert-danger">
          You have not entered a payout address!
        </div>
      );
    }
  };

  return (
    <Layout>
      <div className="container-fluid py-5">
        <h2>Payout Address</h2>

        {payoutAddress()}

        <p>
          In order to use Bet With Coins, we require your bitcoin address where
          you will receive payouts. These are not stored on our server, but in
          your local machine's browser cookie. This can be deleted anytime by
          clearing your cookies.
        </p>

        <p>
          <b>
            Please make sure you are in control of this address and DO NOT use
            an exchange address.
          </b>
        </p>
        <div className="panel panel-default">
          <div className="panel-body">
            <h3>Your Bitcoin Address</h3>

            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>
                  Your bitcoin address where payouts will be received.
                </label>
                <input
                  id="payout"
                  name="payout"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.payout}
                />
              </div>
              <div className="form-group">
                <Button type="submit" className="btn btn-primary">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PayoutAddressPage;
