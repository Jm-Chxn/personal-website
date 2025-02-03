import React, { useEffect } from 'react';
import './About.css';

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

  }, []);

  return (
    <div className="about">
      <section className="hidden">
        <h1>About Me<div className="line"></div> </h1>
        <p>
          Hello, my name is Jim. Currently, I am a student at Simon Fraser University pursuing a dual degree program 
          in Computing Science and a Master in Finance. I am passionate about software development and always looking 
          for new opportunities to learn and grow. Outside of software development, I enjoy watching and playing sports 
          such as soccer, tennis, and skiing.
        </p>
      </section>
    </div>
  );
};

export default About;
