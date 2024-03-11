import React from 'react'
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {HomePage} from './Pages/HomePage.js';
import {ArtGallery} from './Pages/ArtGallery.js';

import { Navbar } from './Components/Navbar.js';
import { NavSideBar } from './Components/NavSideBar/NavSideBar.js';
import { NavbarTop } from './Components/NavbarTop/NavbarTop.js';


function App() {

    return (
      <>
        <div className="App">
          <BrowserRouter>
          <NavbarTop/>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/my-work" element={<h1 style={{textAlign: 'center'}}>My Work</h1>}/>
              <Route path="/blog" element={<h1 style={{textAlign: 'center'}}>Blog</h1>}/>
              <Route path="/about-me" element={<h1 style={{textAlign: 'center'}}>About Me</h1>}/>
              <Route path="/art-gallery" element={<ArtGallery/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
}

export default App;