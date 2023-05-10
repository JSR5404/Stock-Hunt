import React from 'react';

import Toggle from '../Toggle'
const Settings = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'right',
        height: '100vh'
      }}
    >
      <section>
      <h1 className="font-serif">
        Settings
      </h1>
      <br></br>
      <Toggle/>
      </section>   
    </div>
  );
};

export default Settings;