import React from "react";
import "./dataTable.scss";

import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

interface Iprops {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  handleDelete?: (id: Number) => void;
}

const DataTable = (props: Iprops) => {
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <div className='action'>
          <div
            className='delete'
            onClick={() =>
              props.handleDelete && props.handleDelete(params.row.id)
            }
          >
            <DeleteIcon />
          </div>
        </div>
      );
    },
  };
  return (
    <div className='dataTable'>
      <DataGrid
        className='dataGrid'
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
