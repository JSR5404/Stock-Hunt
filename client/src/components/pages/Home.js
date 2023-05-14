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
      <h1 className="flex justify-center pb-5 pt-5 text-xl">Welcome to Stock Hunt!</h1>
      <div className = "flex justify-center">
          <img className="rounded-3xl" src="./stock-3.jpg" alt="home-stockhunt" style={{ width: '50%' }} />
        </div>
        <h4 className ="flex justify-center pt-5">Stockhunt is the best way to aggregate all your favorite stocks and track them in real time without using real US dollars.</h4>
        <h4 className ="flex justify-center pt-5">Head to our About page to learn more about the app and its creation, or head right to Signup to make an account and get started!</h4>
      </div>
      );
};

      export default Home;