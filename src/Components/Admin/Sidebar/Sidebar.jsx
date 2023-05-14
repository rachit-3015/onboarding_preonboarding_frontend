import React from 'react'
import './Sidebar.css'
import image1 from './Img1.png'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <>
      <div className="wrapper">
        
        <div className="sidebar">
          <img className="image" src={image1} alt="Avatar"/>
            <div className="container">
              <ul className="list">
                  <li><Link to="admin/dashboard" >Dashboard</Link></li>
                  <li><Link to="admin/createEmp">Create Employee</Link></li>
                  <li><Link to="admin/selfdetails"> Self-Details</Link></li>
                  <li><Link to="admin/professionaldetails" >Professional Details</Link></li>
                  <li><Link to="admin/bankdetails" >Bank Details</Link></li>
                  <li><Link to="admin/salarystatus">Salary Status</Link></li>
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}

