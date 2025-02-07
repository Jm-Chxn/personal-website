import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faPython, faGitAlt, faJs, faHtml5, faCss } from '@fortawesome/free-brands-svg-icons';
import 'devicon/devicon.min.css'; 
import './Skills.css';

const Skills = () => {
    return (
        <div className="skills">
            <div className="autoShow">
                <h1>Skills</h1>
            </div>
            <div className ="autoShows">
            <div className="slider" style={{ "--width": "100px", "--height": "50px", "--quantity": "9" }}>
                <div className="list">
                    <div className="item" style={{"--position": "1"}}><FontAwesomeIcon icon={faGithub} /></div>
                    <div className="item" style={{"--position": "2"}}><FontAwesomeIcon icon={faGitAlt} /></div>
                    <div className="item" style={{"--position": "3"}}><FontAwesomeIcon icon={faReact} /></div>
                    <div className="item" style={{"--position": "4"}}><FontAwesomeIcon icon={faPython} /></div>
                    <div className="item" style={{"--position": "5"}}><FontAwesomeIcon icon={faJs} /></div>
                    <div className="item" style={{"--position": "6"}}><FontAwesomeIcon icon={faHtml5} /></div>
                    <div className="item" style={{"--position": "7"}}><FontAwesomeIcon icon={faCss} /></div>
                    <div className="item" style={{"--position": "8"}}><i className="devicon-c-plain"></i></div> 
                    <div className="item" style={{"--position": "9"}}><i className="devicon-cplusplus-plain" /></div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Skills;