import React from 'react';

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        // alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>About Stock Hunt</h1>

      <div>
        <a href="https://github.com/JSR5404/Stock-Hunt">
          <img src="./github.png" alt="stockhunt-github" style={{ width: '90%', height: '20%', }} />
        </a>
        <h4>⇧ Click here for Stock Hunt Github ⇧</h4>
      </div>

    </div>
  );
};

export default About;