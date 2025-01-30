import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Intro() {
  const [text] = useTypewriter({
    words: ['Hello, I am a software developer', 'Welcome to the website!'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>
        {text}
        <Cursor />
      </h1>
    </div>
  );
}

export default Intro;
