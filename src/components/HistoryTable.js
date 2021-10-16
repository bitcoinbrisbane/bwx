import React from "react";
import Table from "./Table";

// dataField (key) props (value)
const columnConfig = {
  address: {
    children: "Address",
    width: "40%"
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

const HistoryTable = ({ data, ...props }) => (
  <Table
    data={data}
    columnConfig={columnConfig}
    keyField="id"
    {...props}
  />
);

export default HistoryTable;