import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { TbLayoutNavbar } from 'react-icons/tb';

/**
 * Navbar component for creating navigation bar
 */

function Navbar() {
  return (
    <nav className='nav-container'>
      <ul>
        <li className='icon-navigation'><TbLayoutNavbar/></li>
      </ul>
      <ul>
        <li>
          <NavLink to="/main">Translation Page</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>


      </ul>
    </nav>
  )
}

export default Navbar