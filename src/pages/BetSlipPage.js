import React from "react";
import Layout from "../components/Layout";
// import { Button } from "react-bootstrap";

import useSWR, { useSWRConfig } from "swr";

//import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import BetSlip from "../components/BetSlip";

const BetSlipPage = () => {
  const { address } = useParams();

  const { data, mutate, error } = useSWR(`/betslip?address=${address}`, { refreshInterval: 500 });

  const isLoading = !data && !error;

  const defaultValues = { 
    "address": address,
    "status": "unpaid",
    "proposition": ""
  };

  const viewModel = data || defaultValues;

  return (
    <Layout>
      <div className="container-fluid py-5">
        <Loader loading={isLoading} />
        <BetSlip proposition={viewModel.proposition} address={viewModel.address} status={viewModel.status}></BetSlip>
      </div>
    </Layout>
  );
};

export default BetSlipPage;
