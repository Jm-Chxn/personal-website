import React from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <div className='NavBar'>
        <ul className="Navmenu">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Message</li>
        </ul>
    </div>
  );
};

export default NavBar;
