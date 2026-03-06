import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation_Bar.css'

function Navigation_Bar() {
  return (
    <div className="nav-container">
        <nav className="nav">
            <NavLink 
                to="/"
                className={({isActive}) => isActive ? "active" : ""}
            >
                Home
            </NavLink>
            <NavLink 
                to="/movies"
                className={({isActive}) => isActive ? "active" : ""}
            >
                Movies
            </NavLink>
            <NavLink 
                to="/series"
                className={({isActive}) => isActive ? "active" : ""}
            >
                Series
            </NavLink>
            <NavLink 
                to="/categories"
                className={({isActive}) => isActive ? "active" : ""}
            >
                Categories
            </NavLink>
        </nav>
    </div>
  )
}

export default Navigation_Bar