import React from 'react'
import ProjectListTable from '../components/ProjectListTable';
import Button from '@mui/material/Button';

const Project = () => {
  return (
    <div className="project__container">
      <div className="nav__item">
      <h3>Projects</h3>
      </div>
       
        <div className="projectlist__sec">
          <div className='btn__container'>
          <Button variant="contained" size="medium">
        Add Project
        </Button>
          </div>
       
            
            <div>
                <h3>Project List</h3>
                <div>
                    <input type="search" name="" id="" />
                    <span>sort icon</span>
                    <span>filter icon</span>
                </div>
            </div>
            <ProjectListTable />
        </div>
    </div>
  )
}

export default Project