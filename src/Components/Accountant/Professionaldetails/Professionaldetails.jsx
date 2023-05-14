import React from 'react'
import './Professionaldetails.css'
import { useState , useEffect} from 'react'

export default function Professionaldetails() {
  
  const [data,setData] = useState({
    dp : "",
    onboardedDate : "",
    position : "",
    assignedGroup : "",
    salary : "",
    panNo : "",
    education : "",
    almamater : "",
    yoe : "",
    priorCompaniesName : ""
  })
  
  useEffect(()=>{
    console.log(data);
  },[data])

  
  const handleChange=(event,property)=>{
    setData({...data,[property]:event.target.value})
  }

  
  return (
    <div className="professionaldetails">
        <form>
            <label htmlFor="picture">Profile Picture : </label>
            <input type="file" className="profilepic" accept="image/png, image/jpeg" onChange={(e)=>handleChange(e,'dp')}/><br/>
            <label>Onboarded Date : </label>
            <input type="date" className="onboardeddate" onChange={(e)=>handleChange(e,'onboardedDate')}/><br/>
            <label>Position : </label>
            <input type="text" className="position" onChange={(e)=>handleChange(e,'position')}/><br/>
            <label>Assigned Group : </label>
            <input type="text" className="assignedgroup" onChange={(e)=>handleChange(e,'assignedGroup')}/><br/>
            <label>Salary : </label>
            <input type="number" className="salary" onChange={(e)=>handleChange(e,'salary')}/>
            <label id="pannumber">PAN No. : </label>
            <input type="text" className="pannumber" onChange={(e)=>handleChange(e,'panNo')}/><br/>
            <label>Education : </label>
            <input type="text" className="education" onChange={(e)=>handleChange(e,'education')}/><br/>
            <label>Alma Mater : </label>
            <input type="text" className="almamater" onChange={(e)=>handleChange(e,'almamater')}/><br/>
            <label>Years Of Experience : </label>
            <input type="number" className="yoe" onChange={(e)=>handleChange(e,'yoe')}/><br/>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Prior Companies Name :</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>handleChange(e,'priorCompaniesName')}></textarea>
            </div>
        </form>   
    </div>
  )
}
