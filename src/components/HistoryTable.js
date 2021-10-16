import React from "react";
import Table from "./Table";
import { Link } from "react-router-dom";

// dataField (key) props (value)
const columnConfig = {
  address: {
    children: "Address",
    width: "40%",
    dataFormat: address => <Link to={{ pathname: `/betslip/${address}` }}>{address}</Link>
  },
  status: {
    children: "Status",
    width: "15%"
  },
  proposition: {
    children: "Proposition"
  },
  created: {
    children: "Created"
  }
};

const props = [{"data-page-list": "[50, 100, all]"}];

const HistoryTable = ({ data, ...props }) => (
  <Table
    data={data}
    columnConfig={columnConfig}
    keyField="id"
    {...props}
  />
);

export default HistoryTable;