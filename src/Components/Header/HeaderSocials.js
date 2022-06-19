import React from 'react';

import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

export const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/miki-pejic-132bb3180/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/MiroslavPejic" target="_blank"><FaGithub/></a>
            <a href="https://www.instagram.com/miki.pejic/" target="_blank"><FiInstagram/></a>
        </div>
    )
}