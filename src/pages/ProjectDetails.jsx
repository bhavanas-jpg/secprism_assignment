import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Sidebar from "../components/Sidebar";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@mui/material";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((project) => project.id === Number(id));
  const { projectDetails } = project;
  
  const [isEdit, setIsEdit] = useState(false);
  const [projectDetailValues, setProjectDetailValues] = useState(projectDetails);
  const {
    project_id,
    project_name,
    description,
    status,
    current_release,
    current_details,
  } = projectDetailValues ?? {};
  
  const [projectDetailsForm, setProjectDetailsForm] = useState({
    project_id: project_id || "",
    project_name: project_name || "",
    description: description || "",
    status: status || "",
    current_release: current_release || "",
    current_details: current_details || "",
  });

 

  const editedProjectDetails =(e,values, id)=>{
    e.preventDefault(); 
   project.id=== id ? setProjectDetailValues({...values}): setProjectDetailValues(projectDetailValues);
    setIsEdit(false);
    setProjectDetailsForm({ ...values });
  }



  return (
    <div className="project__container">
      <div className="nav__item">
        <h3>
          <IoIosArrowBack
            className="back__arrow"
            onClick={() => navigate("/")}
          />
          Projects
        </h3>
        <Sidebar id={id} />
      </div>
      <div className="projectlist__sec">
        <p className="project">
          Projects/<span className="project__selected">{project_name}</span>
        </p>
        <div className="projectdetail__sec">
          <h2>Project details</h2>
          <button onClick={() => setIsEdit(true)}>Edit</button>

          {isEdit ? (
            <div>
              <form 
              onSubmit={(e)=>editedProjectDetails(e, projectDetailsForm, project.id)}
              className="editform">
                <label>
                  Project ID:
                  <input
                    type="text"
                    value={projectDetailsForm?.project_id}
                    onChange={(e) =>
                      setProjectDetailsForm((prev) => ({
                        ...prev,
                        project_id: e.target.value,
                      }))
                    }
                  />
                </label>
                <label>
                  Project name:
                  <input
                    type="text"
                    onChange={(e) =>
                      setProjectDetailsForm((prev) => ({
                        ...prev,
                        project_name: e.target.value,
                      }))
                    }
                    value={projectDetailsForm?.project_name}
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    value={projectDetailsForm?.description}
                    onChange={(e) =>
                      setProjectDetailsForm((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  ></textarea>
                </label>
                <label>
                  Status:
                  <input
                    type="text"
                    onChange={(e) =>
                      setProjectDetailsForm((prev) => ({
                        ...prev,
                        status: e.target.value,
                      }))
                    }
                    value={projectDetailsForm?.status}
                  />
                </label>
                <label>
                  Current Release:
                  <input
                    type="text"
                    onChange={(e) =>
                      setProjectDetailsForm((prev) => ({
                        ...prev,
                        current_release: e.target.value,
                      }))
                    }
                    value={projectDetailsForm?.current_release}
                  />
                </label>
                <label>
                  Creation Details:
                  <input
                    type="text"
                    onChange={(e) =>
                      setProjectDetailsForm((prev) => ({
                        ...prev,
                        current_details: e.target.value,
                      }))
                    }
                    value={projectDetailsForm?.current_details}
                  />
                </label>
                <div>
                  <Button type="submit">Save</Button>
                  <Button onClick={()=>setIsEdit(false)}>Cancel</Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="projectdetail__content">
              <p>
                Project ID: <span>{project_id}</span>
              </p>
              <p>
                Project name: <span>{project_name}</span>
              </p>
              <div>
                <p>Description:</p>
                <p className="description">{description}</p>
              </div>
              <p>
                Status:{" "}
                <span
                  className={
                    status === "Active" ? "active__status" : "completed__status"
                  }
                >
                  {status}
                </span>
              </p>
              <p>
                Current Release: <span>{current_release}</span>
              </p>
              <p>
                Creation Details: <span>{current_details}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
