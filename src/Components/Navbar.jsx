import React from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  return (
    <div>
       <nav className="navbar m-0 p-0 navbar-expand-lg bs-danger bg-subtle ">
      <div className="container mr-2 mt-0 p-0 navbar-expand-lg bs-danger bg-subtle">
      <h2 className='ml-5'>Inventory Management System</h2>
        <NavLink className="navbar-brand m-0 p-0 bg-color-blue"  to="/" >
          {/* If you want to use an image logo instead */}
          {/* <img src={logo} alt="logo" /> */}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="text-blue-600">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/screen" activeClassName="text-blue-600">
                Check the status
              </NavLink>
              </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="text-blue-600">
                Contact
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/login" activeClassName="text-blue-600">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar

