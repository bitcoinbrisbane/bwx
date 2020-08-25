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

  // const search = window.location.search;
  // const params = new URLSearchParams(search);
  // const type = params.get("type");

  // //const id = useParams().type;

  const [data, error, isLoading] = useResource(
    `/betslip/${address}`,
    {}, // default data while loading
    { useSecureApi: false }
  );

  console.log(data);

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
