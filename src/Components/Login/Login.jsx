import React, { useState , useEffect } from 'react'
import { loginDataProvider } from '../../Services/SendLoginData'
import'./Login.css'


export default function Login() {
  const [data,setData] = useState({
      pe : "",
    username : "",
    password : ""
  })

  useEffect(()=>{
    console.log(data);
  },[data])

  const handleChange=(event,property)=>{
    //dynamically setting the value
    setData({...data,[property]:event.target.value})

  } 

  const submitForm=(event)=>{
    event.preventDefault();

    loginDataProvider(data).then((response)=>{
      console.log(response);
      console.log("success login");
    }).catch((error)=>{
      console.log(error);
      console.log("Login error");  
    })
    
  }
  
  return (
    <>
      <div className="wrapper">
        <div className="containerization">
          <form onSubmit={submitForm}>
            <div name="form1" id="form1" >
              <select name="subject" id="subject"
               onChange={(e)=>handleChange(e,'empType')}
               value={data.empType}>
                <option value="" defaultValue="selected">--Employment Type--</option>
                <option value="Admin" >Admin</option>
                <option value="Management Intern" >Management Intern</option>
                <option value="HR Intern" >HR Intern</option>
                <option value="SDE Intern" >SDE Intern</option>
                <option value="Programmer Intern" >Programmer Intern</option>
                <option value="On contract" >On contract</option>
                <option value="Human Resources" >Human Resources</option>
                <option value="Accountant" >Accountant</option>
                <option value="Employee" >Employee</option>
              </select>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                <input type="username" className="form-control" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Username"
                onChange={(e)=>handleChange(e,'username')}
                value={data.username}/>
                <div id="usernameHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword" aria-describedby="passwordHelp" placeholder="Password"
                onChange={(e)=>handleChange(e,'password')}
                value={data.password}/>
                <div id="passwordHelp" className="form-text"></div>
            </div>
            <button type="submit" className="btn btn-success" id='button'>Submit</button>
          </form>
        </div>
      </div>
      <div className="rightspace">
      <div className="shadow p-3 mb-5 bg-white rounded" id='shadow'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse minima ratione sequi maiores quis ad ipsa aspernatur in eligendi quod? Quos asperiores quidem incidunt natus saepe rerum minus magni. Dolorem alias reiciendis dolor temporibus nulla repudiandae totam accusantium maxime, sint perferendis quia molestiae debitis dicta illo a, ea, earum omnis? Assumenda aspernatur earum nemo quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eligendi ipsam eveniet nihil nemo, blanditiis quos tempore, expedita minus quasi illo mollitia rerum similique reprehenderit temporibus laboriosam provident aliquam magni modi deserunt tempora quisquam. Error distinctio beatae fugiat, aperiam voluptatibus, in nemo dolorum dignissimos temporibus asperiores perspiciatis consequatur reiciendis rem? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi enim blanditiis repellendus expedita saepe, totam dolorum corrupti distinctio quam vero quos, aliquid natus mollitia molestiae corporis hic placeat nesciunt quibusdam.</div>
      </div>
    </>
  )
}
