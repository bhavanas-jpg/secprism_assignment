import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import {IoIosArrowDown} from "react-icons/io"

const Sidebar = ({id}) => {
 const [securityDropdown, setSecurityDropdown] = useState(false);
 const [configureDropdown, setConfigureDropdown] = useState(false);

  return (
    <div>
      <ul className="sidebar">
        <li className="selected__list">
          <NavLink 
          to={`/projectDetails/${id}`}
          className="sidebar__item">Overview</NavLink>
        </li>
        <li>
          <NavLink className="sidebar__item">Members</NavLink>
        </li>
        <li>
          <NavLink className="sidebar__item">Resources</NavLink>
        </li>
        <li>
          <NavLink className="sidebar__item">Releases</NavLink>
        </li>
        <li onClick={()=>setSecurityDropdown(prev => !prev)}>
          <NavLink className="sidebar__item">Security Activities</NavLink>
          <IoIosArrowDown />
        </li>
        {securityDropdown && 
        <div >
            <p>Policies and Standards</p>
            <p>Trainings and Awareness</p>
          </div>
        }
        <li>
          <NavLink className="sidebar__item">Security Deviations</NavLink>
        </li>
        <li onClick={()=>setConfigureDropdown(prev => !prev)}>
          <NavLink className="sidebar__item">Configure</NavLink>
          <IoIosArrowDown />
        </li>
        {configureDropdown  && 
        <div >
          <p>Email Templates</p>
        </div>
        }
      </ul>

    </div>
  );
};

export default Sidebar;
