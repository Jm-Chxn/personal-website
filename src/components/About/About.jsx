import React, { useEffect } from 'react';
import './About.css';
import skiPic from '../../assets/skii.jpg';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="about">
      <section className="hidden">
        <div className="content-wrapper">
          <h1>About Me</h1>
          <div className="line"></div>
          <div className="content">
            <img src={skiPic} alt="Profile" className="profile-pic" />
            <div className="text-content">
              <p>
                Hello, my name is Jim. I am a student at Simon Fraser University pursuing a dual degree program 
                in Computing Science and Finance. I am passionate about software development and always looking 
                for new opportunities to learn and grow. Outside of software development, I enjoy both watching and playing sports 
                such as soccer, tennis, and skiing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;