import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {

    const navStyles = ({isActive}) => ({
        backgroundColor: isActive ? "rgb(34, 24, 70)" : "",
        borderRadius: isActive ? "30px" : "",
      })

  return (
    <div className='sidebar'>
        {/* <div className='site-title'>
            <h3>Inventory Management</h3>
        </div> */}

        <div className='sidebar-menu'>
            <NavLink
            style={navStyles}
            className="side-nav"
            to="/"
            >
          <span className="nav-title">Dashboard</span>
            </NavLink>

            <NavLink
            style={navStyles}
            className="side-nav"
            to="/departments"
            >
          <span className="nav-title">Departments</span>
            </NavLink>

            <NavLink
             style={navStyles}
            className="side-nav"
            to="/products"
            >
          <span className="nav-title">Products</span>
            </NavLink>


        </div>


    </div>
  )
}
