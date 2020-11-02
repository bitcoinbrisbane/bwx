import React from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import Runners from "../components/Runners";
import useSWR, { mutate } from "swr";

const CupPage = () => {

  const { data, error } = useSWR(`/horseracing/2020-11-03/FLM/7`);
  const isLoading = !data && !error;

  const defaultValues = { "raceNumber": "#", "runners": []};
  const viewModel = data || defaultValues;

  return (
    <Layout>
      <div className="container-fluid py-5">
        <Loader loading={isLoading} />
        <h1 className="mb-3">
          R{viewModel.raceNumber} {viewModel.raceName}
        </h1>

        <Runners data={viewModel} date='2020-11-03' mnemonic='FLM' id='7'></Runners>
      </div>
    </Layout>
  );
};

export default CupPage;
