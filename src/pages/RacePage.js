import React from "react";
import Layout from "../components/Layout";
import useResource from "../hooks/useResource";
import { Link } from "react-router-dom";
//import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import HorseRacingMatrix from "../components/HorseRacingMatrix";

const RacePage = () => {

    //this.props.match.params.id

  const [data, error, isLoading] = useResource(
    `/horseracing/`,
    {"meets": []}, // default data while loading
    { useSecureApi: false }
  );

  console.log(data);

  return (
    <Layout>
      <div className="container-fluid py-5">
        <Loader loading={isLoading} />
        <h1 className="mb-3">Race</h1>

        <HorseRacingMatrix data={data}></HorseRacingMatrix>
      </div>
    </Layout>
  );
};

export default RacePage;
