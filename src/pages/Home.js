import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
        <h1 className="cover-heading">Bet With Coins</h1>
        <p className="lead">
          BWCs is a privacy focused crypto sports betting site. We do not
          capture any personal infomation and only ask our punters to supply
          a payout address. We do not hold any of our customers funds and
          payout immediately once bets have been confirmed on the
          blockchain.
        </p>
        <p className="lead">
          We encourage all our punters to use PGP encrypted mail should you
          need to contact us. Our PGP public key can be found at MIT or protonmail.
        </p>
        <p className="lead">
          In order to use the site, you must add a payout address which is stored in your browsers local storage.
        </p>

    </Layout>
  );
};

export default Home;
