import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

/**
 * Navbar component for creating navigationbar
 */

function Navbar() {
  return (
    <nav className='nav-container'>
      <ul>
        <li>Navigation</li>
      </ul>
      <ul>
        <li>
          <NavLink to="/main">Main Page</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>


      </ul>
    </nav>
  )
}

export default Navbar