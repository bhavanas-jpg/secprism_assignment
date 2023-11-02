import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import Sidebar from '../components/sidebar';
import {IoIosArrowBack} from "react-icons/io"

const ProjectDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const project = projects.find(project => project.id === Number(id));
  const {projectDetails} = project;
  const {project_id, project_name ,description,status, current_release, current_details} = projectDetails ?? {};


  console.log(id);
  return (
    <div className="project__container">
     <div className="nav__item">
     
        <h3>
          <IoIosArrowBack 
          className='back__arrow'
          onClick={()=>navigate("/")} />
          Projects</h3>
        <Sidebar />
      </div>
      <div className="projectlist__sec">
      <p>Projects/<span>{project_name}</span></p>
        <h2>Project details</h2>
        <div className='projectdetail__content'>
          <p>Project ID: <span>{project_id}</span></p>
          <p>Project name: <span>{project_name}</span></p>
          <div >
            <p>Description:</p>
            <p className="description">{description}</p>

          </div>
          
          <p>Status: <span>{status}</span></p>
          <p>Current Release: <span>{current_release}</span></p>
          <p>Creation Details: <span>{current_details}</span></p>
        </div>
        </div>
    </div>
  )
}

export default ProjectDetails