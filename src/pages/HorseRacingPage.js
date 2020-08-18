import React from "react";
import Layout from "../components/Layout";
import useSWR from "swr";
import useResource from "../hooks/useResource";
import { Link } from "react-router-dom";
//import ErrorMessage from "../components/ErrorMessage";
//import Loader from "../components/Loader";
import HorseRacingMatrix from "../components/HorseRacingMatrix";

const HorseRacingPage = () => {
  const [data, error, isLoading] = useResource(
    `/horseracing/`,
    {"meets": []}, // default data while loading
    { useSecureApi: false }
  );

  console.log(data);

  return (
    <Layout>
      <div className="container-fluid py-5">
        <h1 className="mb-3">Horses</h1>

        <HorseRacingMatrix data={data}></HorseRacingMatrix>
      </div>
    </Layout>
  );
};

export default HorseRacingPage;
