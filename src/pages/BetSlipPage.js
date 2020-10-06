import React from "react";
import Layout from "../components/Layout";
import { Button } from "react-bootstrap";
import useResource from "../hooks/useResource";
import useSWR, { mutate } from "swr";
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

  // const [data, error, isLoading] = useResource(
  //   `/betslip?address=${address}`,
  //   {}, // default data while loading
  //   { useSecureApi: false }
  // );

  const { data, error } = useSWR(`/betslip?address=${address}`);
  const isLoading = !data && !error;

  const defaultValues = { "address": address };
  const viewModel = data || defaultValues;

  return (
    <Layout>
      <div className="container-fluid py-5">
        <Loader loading={isLoading} />
        <BetSlip proposition={viewModel.proposition} address={viewModel.address}></BetSlip>
      </div>
    </Layout>
  );
};

export default BetSlipPage;
