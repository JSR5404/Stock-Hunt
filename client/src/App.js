import React, { useEffect } from 'react';
import Navbar from './components/NavBar/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Dash from './components/pages/Dash';
import Search from './components/pages/Search';
import Settings from './components/pages/Settings';
import {keepTheme} from './utils/themes';



function App() {
  useEffect(()=>keepTheme())
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dash' element={<Dash />} />
        <Route path='/search' element={<Search />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>

    </Router>
  );
}

export default App;