import React from 'react';
import './Navbar.css';


const NavBar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='NavBar'>
        <ul className="Navmenu">
            <li><a href="#home" onClick={() => handleScroll('home')}>Home</a></li>
            <li><a href="#about" onClick={() => handleScroll('about')}>About</a></li>
            <li><a href="#projects" onClick={() => handleScroll('project')}>Projects</a></li>
            <li><a href="#skills" onClick={() => handleScroll('skills')}>Skills</a></li>
            <li><a href="#message" onClick={() => handleScroll('message')}>Message</a></li>
        </ul>
    </div>
  );
};

export default NavBar;
