// import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

//For Login 
import Login from './Components/Login/Login'

// For Employee
// import Navbar from './Components/Employee/Navbar/Navbar'
// import Sidebar from './Components/Employee/Sidebar/Sidebar'
// import Bankdetails from './Components/Employee/Bankdetails/Bankdetails'
// import Selfdetails from './Components/Employee/Selfdetails/Selfdetails'
// import Professionaldetails from './Components/Employee/Professionaldetails/Professionaldetails'

//For HR
// import CreateEmp from './Components/HR/CreateEmp/CreateEmp'
// import Navbar from './Components/HR/Navbar/Navbar'
// import Sidebar from './Components/HR/Sidebar/Sidebar'
// import Bankdetails from './Components/HR/Bankdetails/Bankdetails'
// import Selfdetails from './Components/HR/Selfdetails/Selfdetails'
// import Professionaldetails from './Components/HR/Professionaldetails/Professionaldetails'
// import Dashboard from './Components/HR/Dashboard/Dashboard'


//For Accountant
// import Navbar from './Components/Accountant/Navbar/Navbar'
// import Sidebar from './Components/Accountant/Sidebar/Sidebar'
// import Bankdetails from './Components/Accountant/Bankdetails/Bankdetails'
// import Selfdetails from './Components/Accountant/Selfdetails/Selfdetails'
// import Professionaldetails from './Components/Accountant/Professionaldetails/Professionaldetails'
// import Dashboard from './Components/Accountant/Dashboard/Dashboard'

// For Admin
import Navbar from './Components/Admin/Navbar/Navbar'
import Sidebar from './Components/Admin/Sidebar/Sidebar'
import Bankdetails from './Components/Admin/Bankdetails/Bankdetails'
import Selfdetails from './Components/Admin/Selfdetails/Selfdetails'
import Professionaldetails from './Components/Admin/Professionaldetails/Professionaldetails'
import Dashboard from './Components/Admin/Dashboard/Dashboard'
import CreateEmp from './Components/Admin/CreateEmp/CreateEmp'


function App() {
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter> */}
  
    {/* For Employees */}
    {/* <BrowserRouter>
      <Navbar/>
      <Sidebar/> 
        <Routes>
          <Route path="employee/" element={<Selfdetails/>}/>
          <Route path="employee/bankdetails" element={<Bankdetails/>}/>
          <Route path="employee/professionaldetails" element={<Professionaldetails/>}/>
        </Routes>
    </BrowserRouter> */}

   
    {/* For HR */}
    {/* <BrowserRouter>
      <Navbar/>
      <Sidebar/> 
        <Routes>
          <Route path="hr/" element={<Dashboard/>}/>
          <Route path="hr/createEmp" element={<CreateEmp/>}/>
          <Route path="hr/selfdetails" element={<Selfdetails/>}/>
          <Route path="hr/bankdetails" element={<Bankdetails/>}/>
          <Route path="hr/professionaldetails" element={<Professionaldetails/>}/>
        </Routes>
    </BrowserRouter> */}

    {/* For Accountant */}
    {/* <BrowserRouter>
      <Navbar/>
      <Sidebar/> 
        <Routes>
          <Route path="accountant/" element={<Dashboard/>}/>
          <Route path="accountant/selfdetails" element={<Selfdetails/>}/>
          <Route path="accountant/professionaldetails" element={<Professionaldetails/>}/>
          <Route path="accountant/bankdetails" element={<Bankdetails/>}/>
        </Routes>
    </BrowserRouter> */}

    {/* For Admin */}
    <BrowserRouter>
      <Navbar/>
      <Sidebar/> 
        <Routes>
          <Route path="admin/dashboard" element={<Dashboard/>}/>
          <Route path="admin/CreateEmp" element={<CreateEmp/>}/>
          <Route path="admin/selfdetails" element={<Selfdetails/>}/>
          <Route path="admin/bankdetails" element={<Bankdetails/>}/>
          <Route path="admin/professionaldetails" element={<Professionaldetails/>}/>
        </Routes>
    </BrowserRouter>

    </>
  );
}



//the main one
export default App;

