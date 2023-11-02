import React from "react";
import ProjectListTable from "../components/ProjectListTable";
import Button from "@mui/material/Button";
import AddProject from "../components/AddProject";
import { TbArrowsSort } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";

const Project = () => {
  return (
    <div className="project__container">
      <div className="nav__item">
        <h3>Projects</h3>
      </div>

      <div className="projectlist__sec">
        <div className="btn__container">
          <AddProject />
        </div>

        <div className="projectlist__container">
          <h3>Project List</h3>
          <div>
            <input type="search" placeholder="Search projects" />
            <Button size="medium">
              <TbArrowsSort />
            </Button>
            <Button>
              <FiFilter />
            </Button>
          </div>
        </div>
        <ProjectListTable />
      </div>
    </div>
  );
};

export default Project;
