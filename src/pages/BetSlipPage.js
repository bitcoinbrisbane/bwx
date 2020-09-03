import React from "react";
import Layout from "../components/Layout";
import { Button } from "react-bootstrap";
import useResource from "../hooks/useResource";
//import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import BetSlip from "../components/BetSlip";

const BetSlipPage = () => {
  const { address } = useParams();
  console.log(address);

  const payoutAddress = () => {
    return localStorage.getItem("bwx_address");
  }

  const [data, error, isLoading] = useResource(
    `/betslip?address=${address}`,
    {}, // default data while loading
    { useSecureApi: false }
  );

  //console.log(data);

  return (
    <Layout>
      <div className="container-fluid py-5">
        <Loader loading={isLoading} />
        <BetSlip proposition={data.proposition} address={data.address}></BetSlip>
      </div>
    </Layout>
  );
};

export default BetSlipPage;
