import React from 'react';
import './App.css';
import { Home } from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="skills">
        <Skills />
      </div>
      {/* <div id="message">
        <Message />
      </div>  */}
    </div>
  );
}

export default App;
