import { React, useState, useEffect } from 'react';
import { CustomParallax } from './Components/CustomParallax.js';

import image2 from './assets/image_1.jfif';

function App() {

    return (
      <div style={{ textAlign: 'center' }}>
        <CustomParallax image={image2}/>
        <CustomParallax image={image2}/>
        <CustomParallax image={image2}/>
        <CustomParallax image={image2}/>
        <div style={{ height: '100vh' }}></div>
      </div>
    );
}

export default App;