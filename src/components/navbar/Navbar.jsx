import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {

   
  return (
    <nav className='navbar'>

        <div className='site-name'>
            <h3>Inventory Management</h3>
        </div>
        
        <div className='nav-links'> 

        <NavLink to="/">Home</NavLink>
        <NavLink to="/details">Details</NavLink>
        </div>


    </nav>
  )
}
