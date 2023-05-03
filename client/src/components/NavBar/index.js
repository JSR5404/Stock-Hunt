import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './Navbarelements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
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
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;