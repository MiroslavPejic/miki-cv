import { React, useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';

import '../css/customparallax.css';

export const CustomParallax =({ image }) => {
    return (
      <div>
        <Parallax bgImage={ image } blur={{ min: -1, max: 5 }}>
          <div style={{ height: 500 }}>
            <div className="inlineStyle">Dinamic blur</div>
          </div>
        </Parallax>
        <Parallax 
        bgImage={ image }
        strength={200}
        renderLayer={precentage => (
          <div 
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: `rgba(255, 123, 23, ${precentage * 1})`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${precentage * 5})`,
            }}
          >
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div className="inlineStyle">Render prop</div>
        </div>
      </Parallax>
    </div>    
    );
};