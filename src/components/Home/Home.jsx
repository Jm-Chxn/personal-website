import React, { useEffect } from 'react';
import './Home.css';
import Navbar from'./Navbar.jsx';
import Intro from './Intro.jsx';

export const Home = () => {

  useEffect(() => {
    // This will run once the component is mounted
    const interbubble = document.querySelector('.interactive');
    if (!interbubble) return;

    let curx = 0;
    let cury = 0;
    let tgx = 0;
    let tgy = 0;

    function move() {
      curx += (tgx - curx) / 15;
      cury += (tgy - cury) / 15;
      interbubble.style.transform = `translate(${Math.round(curx)}px, ${Math.round(cury)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    // targets the entire browser window 
    window.addEventListener('mousemove', (e) => {
      tgx = e.clientX;
      tgy = e.clientY;
    });

    move();

    // Cleanup function makes it so when my mouse leaves the window, the animation stops
    return () => {
      window.removeEventListener('mousemove', () => {});
    };

  }, []); // Empty array means it will run only once

  return (
    <div className="gradient-bg">
      {/* <Intro /> */}
      <Navbar />
      {/* svg for the filter to make the gooey effect and merge/blend the colors*/}
      <svg>
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" mode="multiply" />
        </filter>
      </defs>
      </svg>
      <div className="gradiant-container"></div>
      <div className="g1"></div>
      <div className="g2"></div>
      <div className="g3"></div>
      <div className="g4"></div>
      <div className="g5"></div>
      <div></div>
    </div>
  );
};
