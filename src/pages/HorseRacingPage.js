import React from "react";
import Layout from "../components/Layout";
import useSWR from "swr";
//import ErrorMessage from "../components/ErrorMessage";
//import Loader from "../components/Loader";


const HorseRacingPage = () => {
  const { data, error } = useSWR("/horseracing");
  const isLoading = !data && !error;

  return (
    <Layout>
      <div className="container-fluid py-5">
        
        <h1 className="mb-3">Horses</h1>
      </div>
    </Layout>
  );
};

export default HorseRacingPage;
