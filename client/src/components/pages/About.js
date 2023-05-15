import React from 'react';
import "./about.css"
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
      <div class="members" align="center">
        <h1>About Stock Hunt</h1>
        <h4>This website is for you to track your own stocks! </h4>
        <div class="container">
          <img src="./github.png" alt="img" class="image"></img>
          <div class="overlay overlayCross">
            <a href="https://github.com/JSR5404/Stock-Hunt">Stock Hunt</a>

          </div>
        </div>
      </div>

      <div align="row">
<div class="column">
        <div class="container">
          <img src="./github-mint.png" alt="img" class="image"></img>
          <div class="overlay overlayRight">
            <a href="https://github.com/cchloe928">Chloe Choi</a>
          </div>
        </div>
        </div>
        <div class="column">

        <div class="container">

          <img src="./github-blue.png" alt="img" class="image"></img>
          <div class="overlay overlayRight">
            <a href="https://github.com/skullkid4200">Jack Einhorn</a>
          </div>
        </div>
        </div>
        <div class="column">


        <div class="container">

          <img src="./github-orange.png" alt="img" class="image"></img>
          <div class="overlay overlayRight">
            <a href="https://github.com/JSR5404">Joshua Ricefield</a>
          </div>
        </div>
</div>
<div class="column">

        <div class="container">

          <img src="./github-red.png" alt="img" class="image"></img>
          <div class="overlay overlayRight">
            <a href="https://github.com/Pvon11">Patrick Vona</a>
          </div>
        </div>
        </div>
        </div>
      </div>
  
  );
};

export default About;