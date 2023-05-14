import React from 'react'
import Professionaldetails from '../Professionaldetails/Professionaldetails'
import Selfdetails from '../Selfdetails/Selfdetails'
import Bankdetails from '../Bankdetails/Bankdetails'

import './Form.css'
export default function Form() {
  return (
    <div>
      <div className="containUsername">
        <label>Username : </label>
        <input type="text" className="username" /><br/>
        <label>Password : </label>
        <input type="text" className="password" /><br/>
      </div>
      <Selfdetails/>
      <Professionaldetails/>
      <Bankdetails/>
      <div className="button">
        <button type="button" class="btn btn-success">Submit</button>
      </div>
    </div>
        
  )
}


