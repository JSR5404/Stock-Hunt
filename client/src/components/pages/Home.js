import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        // display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Welcome to Stock Hunt!</h1>
      <div>
          <img src="./stock-3.jpg" alt="home-stockhunt" style={{ width: '50%' }} />
        </div>
        <h4>The best way to aggregate and track all your favorite stocks! </h4>
        <p>Check out what we are 'about' at the 'About' tab, or hit the sign up if you are ready to get started tracking your stocks!</p>
      </div>
      );
};

      export default Home;