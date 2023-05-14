import React from 'react'
import './Bankdetails.css'
import { useState , useEffect } from 'react'

export default function Bankdetails() {

  const [data,setData] = useState({
    bankName : "",
    accountNo : "",
    branchCode : "",
    ifscCode : "",
    cifNo : ""
  })

  useEffect(()=>{
    console.log(data);
  },[data])

  const handleChange=(event,property)=>{
    setData({...data,[property]:event.target.value})
  }

  return (
    <div className="bankdetails">
    <form name="form1" id="form1">
        Bank Name : <select name="bankno" id="bankno" onChange={(e)=>handleChange(e,'bankName')}>
        <option value="--select bank--" selected='selected'>--select bank--</option>
          <option value="sbi">State Bank Of India</option>
          <option value="axis">Axis Bank</option>
          <option value="icici">ICICI Bank</option>
          <option value="indusind">Indusind Bank</option>
          <option value="citi">Citi Bank</option>
        </select>
    </form>
    <label>Account No. : </label>
    <input type="text" className="accountno"/>
    <label>Branch Code : </label>
    <input type="text" className="branchcode"/>
    <label>IFSC Code : </label>
    <input type="text" className="ifsccode"/>
    <label>CIF No. : </label>
    <input type="text" className="cifno"/>
</div>
  )
}
