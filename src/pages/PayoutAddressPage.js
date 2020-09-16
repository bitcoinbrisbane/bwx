import React from "react";
import Layout from "../components/Layout";
import { Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import Input from "../components/form-inputs/Input";

const PayoutAddressPage = () => {

  const onSubmit = values => {
    localStorage.setItem("bwx_address", values.payout);
    alert("Your address " + values.payout + " has been saved to your browsers local storage.");
  };

  const _payout = localStorage.getItem("bwx_address");

  const initialValues = { 
    payout: _payout
  }

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
        <div>
          <h2>Payout Address</h2>

          {payoutAddress()}

          <p>
            In order to use Bet With Coins, we require your bitcoin address
            where you will receive payouts. These are not stored on our server,
            but in your local machine's browser cookie. This can be deleted
            anytime by clearing your cookies.
          </p>

          <p>
            <b>
              Please make sure you are in control of this address and DO NOT use
              an exchange address.
            </b>
          </p>

          <div className="card">
            <div className="card-body">
              <h3>Your Bitcoin Address</h3>

              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                  <Form className="login-form">
                    <label>Payout address</label>
                    <Input name="payout" />

                    <button
                      className="btn btn-primary btn-block relative d-flex justify-content-center"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <span className="mx-2">Save</span>
                    </button>
                  </Form>
                )}
              </Formik>
              {/* <form onSubmit={handleSubmit} className="col-12">
                <div className="form-group">
                  <label>
                    Enter your bitcoin address where payouts will be received.
                  </label>
                  <input
                    id="payout"
                    name="payout"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={_payout}
                  />
                </div>
                <div className="form-group">
                  <Button type="submit" className="btn btn-primary">
                    Save
                  </Button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PayoutAddressPage;
