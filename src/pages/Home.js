import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col md-2" />
          <div className="col md-8">
            <h1>Bet With Coins</h1>
            <p>
              BWCs is a privacy focused crypto sports betting site. We do not
              capture any personal infomation and only ask our punters to supply
              a payout address. We do not hold any of our customers funds and
              payout immediately once bets have been confirmed on the
              blockchain.
            </p>
            <p>
              We encourage all our punters to use PGP encrypted mail should you
              need to contact us. Our PGP public key can be found at MIT or protonmail.
            </p>
            <p>
              In order to use the site, you must add a payout address which is stored in your browsers local storage.
            </p>
          </div>
          <div className="col md-2" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
