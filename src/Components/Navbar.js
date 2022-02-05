import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { mdOutlineRestaurantMenu } from 'react-icons/md';

// Icons
import { BsPersonCircle } from "react-icons/bs";

import navbarImage from '../assets/navbar_image.png';
import navbarNameImage from '../assets/name_image.jpg';

import '../css/navbar.css';

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    
    return (
        <nav className="app__navbar">
          <div className="app__navbar-logo">
            <BsPersonCircle className="app__navbar-icon"/>
            <img src={navbarNameImage} alt="app logo" />
          </div>
          <ul className="app__navbar-links">
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#about">About</a></li>
            <li className="p__opensans"><a href="#contact">Contact</a></li>
          </ul>
          <div className="app__navbar-smallscreen">
            <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <mdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                <ul className="app__navbar-smallscreen_links">
                <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
                <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                </ul>
            </div>
            )}
          </div>
        </nav>
    )
}