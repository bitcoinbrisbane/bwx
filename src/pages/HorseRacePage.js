import React from "react";
import Layout from "../components/Layout";
//import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import Runners from "../components/Runners";
import useSWR, { mutate } from "swr";

const HorseRacePage = () => {
  const { date, mnemonic, id } = useParams();
  console.log(mnemonic);
  console.log(id);

  // let meetDate = date;
  // if (meetDate === undefined) {
  //   date = new Date();
  // }

  const { data, error } = useSWR(`/horseracing/${mnemonic}/${id}`);
  
  // if (mnemonic === 'mc') {
  //   let { data, error } = useSWR(`/horseracing/melbournecup`);
  // }

  //const { data, error } = useSWR(`/horseracing/melbournecup`);
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

        <Runners data={viewModel} mnemonic={mnemonic} id={id}></Runners>
      </div>
    </Layout>
  );
};

export default HorseRacePage;
