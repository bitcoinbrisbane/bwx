import React from "react";
import Table from "./Table";
import { Link } from "react-router-dom";

// dataField (key) props (value)
const columnConfig = {
  address: {
    children: "Address"
  },
  status: {
    children: "Status",
    width: "15%"
  },
  proposition: {
    children: "Proposition"
  },
  timeStamp: {
    children: "Time"
  }
//   userID: {
//     children: "User ID",
//     dataFormat: uid => <Link to={{ pathname: `/user/${uid}` }}>{uid}</Link>
//   }
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