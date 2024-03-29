import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const options = {
  sizePerPage:50   
}

const Table = ({ columnConfig = {}, hidden = [], data = [], ...props }) => (

  <BootstrapTable
    data={data}
    striped
    hover
    version="4"
    pagination
    options={options}
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
