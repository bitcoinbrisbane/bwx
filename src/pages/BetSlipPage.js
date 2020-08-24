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

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const type = params.get("type");

  //const id = useParams().type;

  const [data, error, isLoading] = useResource(
    `/quote/${mnemonic}/${id}/${runner}?type=${type}`,
    {}, // default data while loading
    { useSecureApi: false }
  );

  console.log(data);

  return (
    <Layout>
      <div className="container-fluid py-5">
        <Loader loading={isLoading} />
        <BetSlip proposition={data.proposition} id={data.nonce}></BetSlip>
      </div>
    </Layout>
  );
};

export default BetSlipPage;
