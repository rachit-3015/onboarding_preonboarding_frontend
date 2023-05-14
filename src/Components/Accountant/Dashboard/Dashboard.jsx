import React from 'react'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="adminhome">
    {/* <div className="form-outline mb-4"> */}
      <form name="form1" id="form1" >
        <div className="row">
          <div className="col-md-5">
            Search By : 
            <select name="subject" id="subject">
              <option value="" selected='selected' >--select catogory--</option>
              <option value="name" >Name</option>
              <option value="id" >Id</option>
              <option value="group" >Group</option>
              <option value="position" >Position</option>
            </select>
          </div>
          <div className="col-md-2">
            <input className='searchbar' placeholder='--write here--' type="search"></input>
          </div>
          <div className="col-md-4 ms-1">
            <button type="button" className="btn btn-primary" id='go'>Go</button>
          </div>
        </div>
      </form>
      
      <table>
        <tr>
          <th className='heading'>Name</th>
          <th className='heading'>Id</th>
          <th className='heading'>Details</th>
        </tr>
        <tr>
          <td>Rachit Patel</td>
          <td>92200584121</td>
          <td><div className="d-flex justify-content-center"><button type="button" className="btn btn-success">view</button></div></td>
        </tr>
        <tr>
          <td>Rachit Patel</td>
          <td>92200584121</td>
          <td><div className="d-flex justify-content-center"><button type="button" class="btn btn-success ">view</button></div></td>
        </tr>
      </table>
    {/* </div> */}
  </div>
  )
}
