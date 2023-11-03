import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const AddProject = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [createProject, setCreateProject] = useState("")

  const addProject=(e,project)=>{
e.preventDefault();
handleClose();
  }

  return (
    <>
      <Button variant="contained" size="medium" onClick={handleOpen}>
        {" "}
        Add Project
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Project
          </Typography>
          <form onSubmit={(e)=> addProject(e,createProject)}>
          <div className="input__container">
           
            <label>Project name</label>
            <input 
            onChange={(e)=> setCreateProject(e.target.value)}
            type="text" placeholder="Enter Project name" />
          </div>
          <div className="action__btns">
            <Button variant="contained"
            type="submit" size="small">
              Create
            </Button>
            <Button onClick={handleClose} size="small">
              Cancel
            </Button>
          </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default AddProject;
