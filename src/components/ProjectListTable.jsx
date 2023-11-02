import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {projects} from "../data/projects";
import {Link} from"react-router-dom";


const columns = [
    { field: "name", 
    headerName: "Name", 
    width: 300,
    renderCell: (params) =>(
      <Link to={`/projectDetails/${params.row.id}`}>{params.value}</Link>
    )
  },
    { field: "created", headerName:"Created", width: 200},
    { field: "updated", headerName:"Updated", width: 200},
    { field: "project_status", headerName: "Status", width: 200}
];

const rows = projects;


const ProjectListTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
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
  )
}

export default ProjectListTable