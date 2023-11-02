import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar">
        <li>
          <NavLink className="sidebar__item">Overview</NavLink>
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
      </ul>

      <li>Security Activities</li>
      <span>Policies and Standards</span>
      <span>Trainings and Awareness</span>
      <li>Security Deviations</li>
      <li>Configure</li>
      <span>Email Templates</span>
    </div>
  );
};

export default Sidebar;
