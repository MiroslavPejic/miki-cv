import { React, useState, useEffect } from 'react';
import { CustomParallax } from './Components/CustomParallax.js';

// custom components
import { Navbar } from './Components/Navbar.js';
import { Footer } from './Components/Footer.js';

import image2 from './assets/image_1.jfif';

function App() {

    return (
      <>
        <Navbar/>
        <div style={{ textAlign: 'center' }}>
          <CustomParallax image={image2}/>
          <CustomParallax image={image2}/>
          <CustomParallax image={image2}/>
          <CustomParallax image={image2}/>
        </div>
        <Footer />
      </>
    );
}

export default App;