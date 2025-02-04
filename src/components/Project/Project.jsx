import React, { useEffect } from 'react';
import './Project.css';
import profilePic from '../../assets/pp.jpg';

const Project = () => {
  return (
    <div className="project">
      <div className="autoShow">
        <h1>Projects</h1>
      </div>
        <img src={profilePic} alt="Profile" className="picture" />
        <div className="projectline">
          <h2>01. Emergency Dashboard</h2>
          <p>A website that allows users to report emergencies which let responders know where the emergency is located and what kind of emergency it is.</p>
          <p style={{fontSize:"25px"}}>Technologies: React, JavaScript, TypeScript</p>
          <a style={{fontSize:"25px", fontWeight: "50" }} href="https://cmpt272.vercel.app/"target="_blank" rel="noopener noreferrer" className="link">Live Website</a>
      </div>
    </div>
  );
};

export default Project;