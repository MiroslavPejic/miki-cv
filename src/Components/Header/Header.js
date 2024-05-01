import React from 'react';
import './Header.css'
import './HeaderTopAnimation.css'

import { HeaderButtons } from './HeaderButtons.js';
import ME from '../../assets/DSC_0064.JPG';

import { HeaderSocials } from './HeaderSocials.js';

export const Header = () => {
    return (
        <header>
            <div className="container header__container">
            <div class="content">
              <div class="content__container">
                <p class="content__container__text">
                  Hello
                </p>
                
                <ul class="content__container__list">
                  <li class="content__container__list__item">world !</li>
                  <li class="content__container__list__item">people !</li>
                  <li class="content__container__list__item">users !</li>
                  <li class="content__container__list__item">everybody !</li>
                </ul>
              </div>
            </div>
              <h5>I'm</h5>
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