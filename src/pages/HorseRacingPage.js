import React from "react";
import Layout from "../components/Layout";
import useSWR from "swr";
import { Link } from "react-router-dom";
//import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import HorseRacingMatrix from "../components/HorseRacingMatrix";

const HorseRacingPage = () => {

  const { data, error } = useSWR(`/horseracing/`);
  const isLoading = !data && !error;

  const defaultValues = {"meets": []};
  const viewModel = data || defaultValues;

  console.log(data);

  return (
    <Layout>
      <div className="container-fluid py-5">
        <Loader loading={isLoading} />
        <h1 className="mb-3">Horses</h1>
        <h2>Today</h2>
        <HorseRacingMatrix data={viewModel}></HorseRacingMatrix>
      </div>
    </Layout>
  );
};

export default HorseRacingPage;
