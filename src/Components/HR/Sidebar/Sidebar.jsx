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
                  <li><Link to="hr/" >Dashboard</Link></li>
                  <li><Link to="hr/createEmp">Create Employee</Link></li>
                  <li><Link to="hr/selfdetails"> Self-Details</Link></li>
                  <li><Link to="hr/professionaldetails" >Professional Details</Link></li>
                  <li><Link to="hr/bankdetails" >Bank Details</Link></li>
                  <li><Link to="hr/salarystatus">Salary Status</Link></li>
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}

