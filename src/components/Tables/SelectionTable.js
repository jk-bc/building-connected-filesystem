import React from "react";
import {
  TreeDataState,
  CustomTreeData,
  SelectionState,
  IntegratedSelection,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableTreeColumn,
} from "@devexpress/dx-react-grid-material-ui";

const getChildRows = (row, rootRows) => {
  const childRows = rootRows.filter(r => r.parentId === (row ? row.id : null));
  return childRows.length ? childRows : null;
};

const SelectionTreeTable = ({ rows, columns, selection, changeSelection }) => {
    return (
        <Grid rows={rows} columns={columns}>
          <TreeDataState />
          <CustomTreeData getChildRows={getChildRows} />
          <Table />
          <SelectionState
            selection={selection}
            onSelectionChange={changeSelection}
          />
          <IntegratedSelection />
          <TableHeaderRow />
  
          <TableTreeColumn for="name" showSelectionControls showSelectAll />
        </Grid>
      );
}

export default SelectionTreeTable;