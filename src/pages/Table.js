import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const Table = ({ columnConfig = {}, hidden = [], data = [], ...props }) => (
  <BootstrapTable
    data={data}
    striped
    hover
    version="4"
    pagination
    data-page-size="25"
    tableContainerClass="table-responsive"
    {...props}
  >
    {Object.keys(columnConfig)
      .filter(dataField => hidden.indexOf(dataField) < 0)
      .map(dataField => (
        <TableHeaderColumn
          key={dataField}
          dataField={dataField}
          dataSort
          {...columnConfig[dataField]}
        />
      ))}
  </BootstrapTable>
);

export default Table;
