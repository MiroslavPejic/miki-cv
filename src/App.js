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

function App() {

    return (
      <>
        <div className="App">
            <BrowserRouter
              forceRefresh={false}>
              <div>
                <Navbar/>
                <Routes>
                  <Route element={<HomePage/>} path="/" />
                  <Route element={<ArtGallery/>} path="/art-gallery"/>
                </Routes>
              </div>
            </BrowserRouter>
          </div>
      </>
    );
}

export default App;