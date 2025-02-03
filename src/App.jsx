import React from 'react';
import './App.css';
import { Home } from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      {/* <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="message">
        <Message />
      </div> */}
    </div>
  );
}

export default App;
