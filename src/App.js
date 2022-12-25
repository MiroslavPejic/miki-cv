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


function App() {

    return (
      <>
        <div className="App">
          <NavSideBar/>
          <HomePage/>
        </div>
      </>
    );
}

export default App;