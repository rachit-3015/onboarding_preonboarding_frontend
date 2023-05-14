import React from 'react'
import { useState , useEffect } from 'react'
import './Selfdetails.css'

export default function Selfdetails() {

   //getting values from forms in this state
   const [data,setData] = useState({
    name : "",
    birthdate : "",
    age : "",
    mobileNo : "",
    native : "",
    aadharNo : "",
    cast : "",
    email : "",
    languages : "",
    address : ""
  })

  useEffect(()=>{
    console.log(data);
  },[data])

  const handleChange=(event,property)=>{
    setData({...value,[property]:event.target.value})
  }

  return (
    <div className="selfdetails">
        <form>
            <label>Name : </label>
            <input type="text" className="name" onChange={(e)=>handleChange(e,'name')}/><br/> 
            <label>Birthdate : </label>
            <input type="date" className="birthdate" onChange={(e)=>handleChange(e,'birthdate')}/>
            <label id="age">Age : </label>
            <input type="number" className="age" onChange={(e)=>handleChange(e,'age')}/><br/>
            <label>Mobile No. : </label>
            <input type="tel" className="mobile_no" onChange={(e)=>handleChange(e,'mobileNo')}/>
            <label id="native">Native : </label>
            <input type="text" className="native" onChange={(e)=>handleChange(e,'native')}/><br/>
            <label>Aadhar No. : </label>
            <input type="text" className="aadharano" onChange={(e)=>handleChange(e,'aadharNo')}/>
            <label id="cast">Cast : </label>
            <input type="text" className="cast" onChange={(e)=>handleChange(e,'cast')}/><br/>
            <label>Email Address : </label>
            <input type="email" className="email" onChange={(e)=>handleChange(e,'email')}/><br/>
            <label>Languages : </label>
            <input type="text" className="languages" onChange={(e)=>handleChange(e,'languages')}/><br/> 
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Address :</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>handleChange(e,'address')}></textarea>
            </div>
        </form>
    </div>
  )
}
