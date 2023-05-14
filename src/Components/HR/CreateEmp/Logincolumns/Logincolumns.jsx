import React from 'react'
import './Logincolumns.css'

export default function Logincolumns() {
  return(
    <>
    <div className='wrapped'>
      <form name="form1" id="form1" >
          <select name="subject" id="subject">
            <option defaultValue="selected">--Employment Type--</option>
            <option value="Management Intern" >Management Intern</option>
            <option value="HR Intern" >HR Intern</option>
            <option value="SDE Intern" >SDE Intern</option>
            <option value="Programmer Intern" >Programmer Intern</option>
            <option value="On contract" >On contract</option>
                
            <option value="Accountant" >Accountant</option>
            <option value="Employee" >Employee</option>
          </select>
      <div className="mb-3">
                <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                <input type="username" className="form-control" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Username"/>
                <div id="usernameHelp" className="form-text"></div>
      </div>
      <div className="mb-3">
                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword" aria-describedby="passwordHelp" placeholder="Password"/>
                <div id="passwordHelp" className="form-text"></div>
      </div>
      </form>
    </div>
    </>
  )
}