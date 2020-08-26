import React from "react";
import Layout from "../components/Layout";
import useResource from "../hooks/useResource";
//import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import HistoryTable from "../components/HistoryTable";

const HistoryPage = () => {

  const [data, error, isLoading] = useResource(
    `bethistory`,
    [],
    { useSecureApi: false }
  );

  console.log(data);

  return (
    <Layout>
      <div className="container-fluid py-5">
        <Loader loading={isLoading} />
        <h1 className="mb-3">
          History
        </h1>

        <HistoryTable data={data} />
      </div>
    </Layout>
  );
};

export default HistoryPage;
