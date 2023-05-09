import React from 'react';

const About = () => {
  return (
    <div
      style={{
        // display: 'flex',
        // justifyContent: 'Center',
        // alignItems: 'Right',
        // height: '100vh'
      }}
    >
      <h1>About Stock Hunt</h1>
      <h4>This website is for you to track your own stocks! </h4>

      <div>
        <a href="https://github.com/JSR5404/Stock-Hunt">
          <img src="./github.png" alt="stockhunt-github" style={{ width: '50%', height: '30%', }} />
        </a>
        <h4>⇧ Click here for Stock Hunt Github ⇧</h4>
      </div>
      <div>
        <a href="https://github.com/cchloe928">
          <img src="./github-mint.png" alt="chloe-github" style={{ width: '20%', height: '30%', }} />
        </a>
        <h4>Chloe Choi</h4>
      </div>
      <div>
        <a href="https://github.com/skullkid4200">
          <img src="./github-blue.png" alt="skullkid-github" style={{ width: '20%', height: '30%', }} />
        </a>
        <h4>Jack Einhorn</h4>
      </div>
      <div>
        <a href="https://github.com/JSR5404">
          <img src="./github-orange.png" alt="JSR-github" style={{ width: '20%', height: '30%', }} />
        </a>
        <h4>Joshua Ricefield</h4>
      </div>
      <div>
        <a href="https://github.com/Pvon11">
          <img src="./github-red.png" alt="pvon-github" style={{ width: '20%', height: '30%', }} />
        </a>
        <h4>Patrick Vona</h4>
      </div>

    </div>
  );
};

export default About;