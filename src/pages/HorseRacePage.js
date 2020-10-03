import React from "react";
import Layout from "../components/Layout";
import useResource from "../hooks/useResource";
//import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import Runners from "../components/Runners";
import useSWR, { mutate } from "swr";

const HorseRacePage = () => {
  const { mnemonic, id } = useParams();
  console.log(mnemonic);
  console.log(id);

  const [data, error, isLoading] = useResource(
    `/horseracing/${mnemonic}/${id}`,
    { runners: [] }, // default data while loading
    { useSecureApi: false }
  );

  // const { data, error } = useSWR(`/horseracing/${mnemonic}/${id}`);
  // const isLoading = !data && !error;

  console.log(data);

  return (
    <Layout>
      <div className="container-fluid py-5">
        <Loader loading={isLoading} />
        <h1 className="mb-3">
          R{data.raceNumber} {data.raceName}
        </h1>

        <Runners data={data} mnemonic={mnemonic} id={id}></Runners>
      </div>
    </Layout>
  );
};

export default HorseRacePage;
