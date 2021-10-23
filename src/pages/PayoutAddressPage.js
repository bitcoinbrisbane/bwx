import React from "react";
import Layout from "../components/Layout";
// import { Formik, Form } from "formik";
import { Formik } from "formik";
import { Button, Form, InputGroup } from "react-bootstrap";
// import Input from "../components/form-inputs/Input";

const PayoutAddressPage = () => {
  const onSubmit = values => {
    localStorage.setItem("bwx_address", values.payout);
    alert(
      "Your address " +
        values.payout +
        " has been saved to your browsers local storage."
    );
  };

  const _payout = localStorage.getItem("bwx_address");

  const initialValues = {
    payout: _payout
  };

  const payoutAddress = () => {
    if (_payout === "" || _payout === undefined) {
      return (
        <div className="alert alert-danger">
          You have not entered a payout address!
        </div>
      );
    }
  };

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col md-2" />
          <div className="col md-8">
            <div className="card">
              <div className="card-header">Your Payout Address</div>
              <div className="card-body">
                <h5 className="card-title">
                  Please make sure you are in control of this address and DO NOT
                  use an exchange address.
                </h5>
                <p className="card-text">
                  In order to use Bet With Coins we require your bitcoin cash
                  address where you will receive payouts. These are not stored
                  on our server but in your local machine's browser cookie. This
                  can be deleted anytime by clearing your cookies.
                </p>

                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                  {({ isSubmitting }) => (
                    <Form>
                      <Form.Group>
                        <Form.Label>Please enter your wallet address to receive your
                        winnings.</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="input"
                            name="payout"
                            placeholder="bitcoincash:"
                          />
                        </InputGroup>
                      </Form.Group>

                    
                      <Button
                        className="btn btn-primary btn-block relative d-flex justify-content-center"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        <span className="mx-2">Save</span>
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>

            {payoutAddress()}

          </div>
          <div className="col md-2" />
        </div>
      </div>
    </Layout>
  );
};

export default PayoutAddressPage;
