import React from 'react';
import './Header.css'

import { HeaderButtons } from './HeaderButtons.js';
import ME from '../../assets/portrait_suit.png';

import { HeaderSocials } from './HeaderSocials.js';

export const Header = () => {
    return (
        <header>
            <div className="container header__container">
              <h5>Hello I'm</h5>
              <h1>Miki</h1>
              <h5 className="text-light">Fullstack Developer</h5>

              <HeaderButtons />
              <HeaderSocials/>

              <div className="me__image">
                <img src={ME} alt="Me" />
              </div>

              <a href="#contact" className="scroll__down">Scroll Down</a>

            </div>
        </header>
    )
}