import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profilePic from '../../assets/pp.jpg';
import './Intro.css';

function Intro() {
  const [text] = useTypewriter({
    words: [' student',' software engineer', ' developer'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="app">
      <div className="container">
        Hey, I'm Jim
        <img src={profilePic} alt="Profile" className="pfp" />
      </div>
      <div className="animated-typing">
        I am a 
        <span>{text}</span>
        <Cursor />
      </div>
    </div>
  );
}

export default Intro;
