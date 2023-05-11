import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './Navbarelements';

import Auth from '../../utils/auth';  

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    
    <div>
    <Nav>
    <Bars />

    <NavMenu>
    {Auth.loggedIn() ? (
      
      <>
      <NavLink to='/' activestyle = "true">
        Home
      </NavLink>
      <NavLink to='/dash' activestyle  = "true">
        My Dash
      </NavLink>
      <NavLink to='/about' activestyle  = "true">
        About
      </NavLink>
      <NavLink to='/search' activestyle  = "true">
        Search Stocks
      </NavLink>
      <NavLink to='/settings' activestyle  = "true">
        Settings
      </NavLink>
      <button onClick={logout}>
        Logout
      </button>
      </>
      
    ) : (
      <>
      <NavLink to='/' activestyle = "true">
        Home
      </NavLink>
      <NavLink to='/dash' activestyle  = "true">
        My Dash
      </NavLink>
      <NavLink to='/about' activestyle  = "true">
        About
      </NavLink>
      <NavLink to='/search' activestyle  = "true">
        Search Stocks
      </NavLink>
      <NavLink to='/settings' activestyle  = "true">
        Settings
      </NavLink>
      <NavLink to='/login' activestyle  = "true">
        Log in
      </NavLink>
      <NavLink to='/signup' activestyle  = "true">
        Sign Up
      </NavLink>
      </>
    )}
    </NavMenu>
  </Nav>
  </div>
  

    // <>
    //   <Nav>
    //     {Auth.loggedIn()} ? (
    //       <Bars />
    //     <NavMenu>
    //       <NavLink to='/' activestyle = "true">
    //         Home
    //       </NavLink>
    //       <NavLink to='/dash' activestyle  = "true">
    //         My Dash
    //       </NavLink>
    //       <NavLink to='/about' activestyle  = "true">
    //         About
    //       </NavLink>
    //       <NavLink to='/search' activestyle  = "true">
    //         Search Stocks
    //       </NavLink>
    //       <NavLink to='/settings' activestyle  = "true">
    //         Settings
    //       </NavLink>
        
    //     </NavMenu>
    //   </Nav>
    //     ) : (
    //       <Bars />
    //     <NavMenu>
    //       <NavLink to='/' activestyle = "true">
    //         Home
    //       </NavLink>
    //       <NavLink to='/about' activestyle  = "true">
    //         About
    //       </NavLink>
    //       <NavLink to='/settings' activestyle  = "true">
    //         Settings
    //       </NavLink>
    //       <NavLink to='/login' activestyle  = "true">
    //         Log in
    //       </NavLink>
    //       <NavLink to='/signup' activestyle  = "true">
    //         Sign Up
    //       </NavLink>
    //     </NavMenu>
    //     )
    // </>
  );
};
  
export default Navbar;