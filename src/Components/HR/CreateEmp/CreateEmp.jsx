import React from 'react'
import Selfdetails from '../Selfdetails/Selfdetails'
import Professionaldetails from '../Professionaldetails/Professionaldetails'
import Bankdetails from '../Bankdetails/Bankdetails'
import Logincolumns from './Logincolumns/Logincolumns'
import './CreateEmp.css'

export default function CreateEmp() {

   
  return (
    <div className="createEmp">
      <Logincolumns/>
      <Selfdetails/>
      <Professionaldetails/>
      <Bankdetails/>
    </div>
  )
}
