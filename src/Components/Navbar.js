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
            <li className="p__opensans"><a href="#">Home</a></li>
            <li className="p__opensans"><a href="#">Art gallery</a></li>
          </ul>
          <div className="app__navbar-smallscreen">
            <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <mdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                <ul className="app__navbar-smallscreen_links">
                <li><a href="#" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="#" onClick={() => setToggleMenu(false)}>Art gallery</a></li>
                </ul>
            </div>
            )}
          </div>
        </nav>
    )
}