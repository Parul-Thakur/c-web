// NavbarMini.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarMini.css'; 

const NavbarMini = () => {
  return (
    <nav className="navbarMini">
      <ul className="miniLinks">
        <li>
          <NavLink 
            to="/reset-pin" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Reset Pin
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/access-code" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Access Code
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/access-key" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Access Key
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMini;
