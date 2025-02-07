import React from 'react';
import './Navbar.css';

const NavBar = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className='NavBar'>
            <ul className="Navmenu">
                <li><a href="#home" onClick={(e) => {
                    e.preventDefault();
                    handleScroll('home');
                }}>Home</a></li>
                <li><a href="#about" onClick={(e) => {
                    e.preventDefault();
                    handleScroll('about');
                }}>About</a></li>
                <li><a href="#projects" onClick={(e) => {
                    e.preventDefault();
                    handleScroll('project');
                }}>Projects</a></li>
                <li><a href="#skills" onClick={(e) => {
                    e.preventDefault();
                    handleScroll('skills');
                }}>Skills</a></li>
                <li><a href="#message" onClick={(e) => {
                    e.preventDefault();
                    handleScroll('message');
                }}>Message</a></li>
            </ul>
        </div>
    );
};

export default NavBar;