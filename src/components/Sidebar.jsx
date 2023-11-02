import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <ul>
            <li>Overview</li>
            <li>Members</li>
            <li>Resources</li>
            <li>Releases</li>
            //dropdown
            <li>Security Activities</li>
            <span>Policies and Standards</span>
            <span>Trainings and Awareness</span>
           <li>Security Deviations</li>
           <li>Configure</li>
           <span>Email Templates</span>
        </ul>
    </div>
  )
}

export default Sidebar