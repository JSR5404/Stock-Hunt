import React from 'react';
import Toggle from '../Toggle'
const Settings = () => {
  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'Right',
      height: '100vh'
    }}
    >
      <h1>Settings</h1>
      <br></br>
      <Toggle/>
    </div>
  );
};

export default Settings;