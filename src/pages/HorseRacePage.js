import React from "react";
import Layout from "../components/Layout";
//import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import Runners from "../components/Runners";
// import useSWR, { mutate } from "swr";
import useSWR from "swr";

const HorseRacePage = () => {
  const { date, mnemonic, id } = useParams();
  const { data, error } = useSWR(`/horseracing/${mnemonic}/${id}`);
  const isLoading = !data && !error;

  const defaultValues = { "raceNumber": "#", "runners": []};
  const viewModel = data || defaultValues;
  const _date = Date.now() || date;

  console.log(_date);

  return (
    <Layout>
      <div className="container-fluid py-5">
        <Loader loading={isLoading} />
        <h1 className="mb-3">
          R{viewModel.raceNumber} {viewModel.raceName}
        </h1>

        <Runners data={viewModel} date={_date} mnemonic={mnemonic} id={id}></Runners>
      </div>
    </Layout>
  );
};

export default HorseRacePage;
