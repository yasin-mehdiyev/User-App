import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
               <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">Home</NavLink>
               </li>
               <li class="nav-item">
                  <NavLink className="nav-link" exact to="/about">About</NavLink>
               </li>
               <li class="nav-item">
                  <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
               </li>
            </ul>

               <NavLink className="btn btn-outline-light" exact to="/users/add">Add Users</NavLink>

          </div>
        </div>
      </nav>
      )
}

export default Navbar
