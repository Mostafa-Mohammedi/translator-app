import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav><ul>
        <li>Main Page</li>
        </ul>
        <ul>
            <li>
                <NavLink to="/main">MainPage</NavLink>
            </li>
            <li>
                <NavLink to="profile">Profile</NavLink>
            </li>
            
            
        </ul>
    </nav>
  )
}

export default Navbar