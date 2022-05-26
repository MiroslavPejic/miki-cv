import React from 'react';
import { Parallax } from 'react-parallax';

import '../css/customparallax.css';

export const CustomParallax =({ image, type }) => {

    const [parallaxType, setParralaxType] = React.useState(1);
    const [view, setView] = React.useState();

    React.useEffect(() => {
      setParralaxType(type);

      if(parallaxType === 1) {
        setView(parallax_1)
      } else if(parallaxType === 2) {
        setView(parallax_2);
      } else {
        setView(parallax_1);
      }
    }, [])

    const parallax_1 = () => {
      return (
        <Parallax bgImage={ image } blur={{ min: -1, max: 5 }}>
          <div style={{ height: 500 }}>
            <div className="inlineStyle">Dinamic blur</div>
          </div>
        </Parallax>
      )
    }

    const parallax_2 = () => {
      return (
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
      )
    }

    return (<div>
        {
          view()
        }
      </div>
    );
};