import React from "react";
import {
  TreeDataState,
  CustomTreeData,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn
} from "@devexpress/dx-react-grid-material-ui";

const getChildRows = (row, rootRows) => {
  const childRows = rootRows.filter(r => r.parentId === (row ? row.id : null));
  return childRows.length ? childRows : null;
};

const DisplayTreeTable = ({ rows, columns }) => {
  return (
    <Grid rows={rows} columns={columns}>
      <TreeDataState />
      <CustomTreeData getChildRows={getChildRows} />
      <Table />
      <TableHeaderRow />

      <TableTreeColumn for="name" />
    </Grid>
  );
};

export default DisplayTreeTable;
