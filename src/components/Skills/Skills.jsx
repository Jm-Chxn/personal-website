import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Skills.css';


const Skills = () => {
    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="slider" style={{ "--width": "100px", "--height": "50px", "--quantity": "6" }}>
                <div className="list">
                    <div className="item" style={{"--position": "1"}}><FontAwesomeIcon icon={faGithub} /></div>
                    <div className="item" style={{"--position": "2"}}><FontAwesomeIcon icon={faGithub} /></div>
                    <div className="item" style={{"--position": "3"}}><FontAwesomeIcon icon={faGithub} /></div>
                    <div className="item" style={{"--position": "4"}}><FontAwesomeIcon icon={faGithub} /></div>
                    <div className="item" style={{"--position": "5"}}><FontAwesomeIcon icon={faGithub} /></div>
                    <div className="item" style={{"--position": "6"}}><FontAwesomeIcon icon={faGithub} /></div>
                </div>
            </div>
        </div>
    );
};

export default Skills;