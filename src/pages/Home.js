import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
        <div className="container-fluid py-5">
          <div className="row">
            <div className="col">

            <h1>Bet With Coins</h1>
            <p>BWCs is a privacy focused crypto sports betting site.  We do not capture personal infomation and only ask our punters to supply a payment address.  We do not hold any of our customers funds, and payout immediately after the even has finished and payments confirmed on the blockchain.</p>
            <p>We encourage all our punters to use PGP encrypted mail, should you need to contact us.  Our PGP public key can be found at </p>
          </div>
        </div>
      </div>

    </Layout>

  );
};

export default Home;
