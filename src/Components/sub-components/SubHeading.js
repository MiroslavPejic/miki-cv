import React from 'react';

export const SubHeading = ({ title }) => {
  return <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img  alt="spoon_image" className="spoon__img" />
  </div>
};