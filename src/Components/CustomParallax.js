import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

import '../css/customparallax.css';

export const CustomParallax =({ image, type, heading, summary }) => {

    const [parallaxType, setParralaxType] = React.useState(1);

    React.useEffect(() => {
      setParralaxType(type);
    }, [])

    const parallax_1 = () => {
      return (
        <Parallax bgImage={ image } blur={{ min: -1, max: 5 }}>
          {heading !== undefined 
          ? <div className="content-wrapper">
              <p>{heading}</p>
              <p>{summary}</p>
            </div>
          : <div/>
          }
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

    if(parallaxType === 1) {
      return (<>{ parallax_1() } </>);
    } else if(parallaxType === 2) {
      return (<>{ parallax_2() } </>);
    } else {
      return (<>{ parallax_1() } </>);
    }
}

CustomParallax.propTypes = {
  image: PropTypes.any,
  type: PropTypes.number,
  heading: PropTypes.string,
  summary: PropTypes.string
}