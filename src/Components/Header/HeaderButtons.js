import React from 'react';
import CV from '../../assets/CV_Miroslav.docx';

export const HeaderButtons = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Contact me</a>
        </div>
    )
}