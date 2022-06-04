import React from 'react';
import './Navigation.css';
import {useState} from 'react';

import {
    AiOutlineHome,
    AiOutlineUser
} from 'react-icons/ai';

import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

export const Navigation = () => {
    const [activeNav, setActiveNav] = useState('#');
    
    return (
        <nav>
            <a href='#'
               onClick={() => setActiveNav('#')}
               className={activeNav === '#' ? 'active' : ''}
            >
              <AiOutlineHome/>
            </a>
            <a href='#about' 
               onClick={() => setActiveNav('#about')}
               className={activeNav === '#about' ? 'active' : ''}
            >
              <AiOutlineUser/>
            </a>
            <a href='#experience'
               onClick={() => setActiveNav('#experience')}
               className={activeNav === '#experience' ? 'active' : ''}
            >
              <BiBook/>
            </a>
            <a href='#services'
               onClick={() => setActiveNav('#services')}
               className={activeNav === '#services' ? 'active' : ''}
            >
              <RiServiceLine/>
            </a>
            <a href='#portfolio'
               onClick={() => setActiveNav('#portfolio')}
               className={activeNav === '#portfolio' ? 'active' : ''}
            >
              <BsFillPersonLinesFill/>
            </a>
            <a href='#contact'
               onClick={() => setActiveNav('#contact')}
               className={activeNav === '#contact' ? 'active' : ''}
            >
              <BiMessageSquareDetail/>
            </a>
        </nav>
    )
}