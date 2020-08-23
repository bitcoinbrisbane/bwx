import React from "react";
import Layout from "../components/Layout";
import useResource from "../hooks/useResource";
//import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import BetSlip from "../components/BetSlip";

const BetSlipPage = () => {
  const { mnemonic, id, runner } = useParams();
  console.log(mnemonic);
  console.log(id);
  console.log(runner);

  const [data, error, isLoading] = useResource(
    `/betslip/quote/${mnemonic}/${id}/${runner}`,
    {}, // default data while loading
    { useSecureApi: false }
  );

  console.log(data);

  return (
    <Layout>
      <div className="container-fluid py-5">
        <Loader loading={isLoading} />

        <BetSlip data={data}></BetSlip>
      </div>
    </Layout>
  );
};

export default BetSlipPage;
