import React from 'react'
import Login from '../login/Login'
import Register from '../register/Register'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const header = localStorage.getItem("token")
  const navigate = useNavigate('');
 
  const handleLogout =()=>{
    localStorage.removeItem("token");
    navigate("/login")
  }
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NoteBook App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={() => navigate("/home")}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={() => navigate("/add-todo")}>Add</a>
        </li>
      </ul>
      {header &&   <div className="d-flex" role="search">
        <button className="btn btn-outline-danger m-2" type="button" onClick={handleLogout}>Logout</button>
        {/* <button className="btn btn-outline-success m-2" type="button" onClick={() => navigate("/login")} > Login</button> */}
      </div> }
      {!header && <div className="d-flex" role="search">
        <button className="btn btn-outline-danger m-2" type="button" onClick={() => navigate("/register")}>Register</button>
        <button className="btn btn-outline-success m-2" type="button" onClick={() => navigate("/login")} > Login</button>
      </div> }
    </div>
  </div>
</nav>
{/* <Login /> */}
{/* <Register /> */}
   </>
  )
}
