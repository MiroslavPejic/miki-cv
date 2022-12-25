import React from 'react';
import { useState, useEffect } from 'react';

import { Header } from '../Components/Header/Header.js';
import { Navigation } from '../Components/Navigation/Navigation.js';
import { About } from '../Components/About/About.js';
import { Experience } from '../Components/Experience/Experience.js';
import { Services } from '../Components/Services/Services.js';
import { Portfolio } from '../Components/Portfolio/Portfolio.js';
import { Testimonials } from '../Components/Testimonials/Testimonials.js';
import { Contact } from '../Components/Contact/Contact.js';
import { Footer } from '../Components/Footer/Footer.js';

export const HomePage = () => {
    return(
        <>
          <div>
            <Header/>
            <Navigation/>
            <About/>
            <Experience/>
            <Services/>
            <Portfolio/>
            {
              <Testimonials/>
            }
            <Contact/>
            <Footer/>
          </div>
      </>
    )
}