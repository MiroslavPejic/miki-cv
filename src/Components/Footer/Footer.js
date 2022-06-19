import React from 'react';
import './Footer.css'

import {BsLinkedin} from 'react-icons/bs';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

export const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">MIKI</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/miki-pejic-132bb3180/" target="_blank"><BsLinkedin/></a>
                <a href="https://www.instagram.com/miki.pejic/" target="_blank"><FiInstagram/></a>
                <a href="https://twitter.com/HDmiksta" target="_blank"><IoLogoTwitter/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Miki</small>
            </div>
        </footer>
    )
}