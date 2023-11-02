import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

const statusColors = {
  Active: "green",
  Completed: "black",
};

const StatusCellRenderer = ({ value }) => {
  const cellStyle = {
    color: statusColors[value],
  };

  return <div style={cellStyle}>{value}</div>;
};

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 300,
    renderCell: (params) => (
      <Link to={`/projectDetails/${params.row.id}`}>{params.value}</Link>
    ),
  },
  { field: "created", headerName: "Created", width: 200 ,
  renderCell: (params) => (
    <div>
        {params.row.created}
        <br />
        {params.row.createdDate}, {params.row.createdTime}
    </div>
)
},
  { field: "updated", headerName: "Updated", width: 200 },
  {
    field: "project_status",
    headerName: "Status",
    renderCell: StatusCellRenderer,
    width: 200,
  },
];

const rows = projects;


const ProjectListTable = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 2 },
          },
        }}
        pageSizeOptions={[2, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ProjectListTable;
