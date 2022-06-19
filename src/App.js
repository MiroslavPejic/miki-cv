import React from 'react'
import { useState, useEffect } from 'react';

import { Header } from './Components/Header/Header.js';
import { Navigation } from './Components/Navigation/Navigation.js';
import { About } from './Components/About/About.js';
import { Experience } from './Components/Experience/Experience.js';
import { Services } from './Components/Services/Services.js';
import { Portfolio } from './Components/Portfolio/Portfolio.js';
import { Testimonials } from './Components/Testimonials/Testimonials.js';
import { Contact } from './Components/Contact/Contact.js';
import { Footer } from './Components/Footer/Footer.js'

function App() {

    return (
      <>
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
      </>
    );
}

// OLD Functions
/*
 // ------------- VARIABLES ------------- //
  var ticking = false;
  var isFirefox = (/Firefox/i.test(navigator.userAgent));
  var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
  var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
  var slideDurationSetting = 600; //Amount of time for which slide is "locked"
  var currentSlideNumber = 0;
  var totalSlideNumber = 4
  let delta

  React.useEffect(() => {
    console.log('loaded page')

  }, [])

  // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
  function parallaxScroll(evt) {
  console.log('evt is: ', evt)
  console.log('current slide number: ', currentSlideNumber)

    if (isFirefox) {
      //Set delta for Firefox
      delta = evt.detail * (-120);
    } else if (isIe) {
      //Set delta for IE
      delta = -evt.deltaY;
    } else {
      //Set delta for all other browsers
      delta = -evt.deltaY;
    }

    if (ticking != true) {
      if (delta <= -scrollSensitivitySetting) {
        //Down scroll
  console.log('we are here 1')
  console.log('current: ', currentSlideNumber, ' total slide number: ', totalSlideNumber)
        ticking = true;
        if (currentSlideNumber !== totalSlideNumber - 1) {
          currentSlideNumber++;
          nextItem();
        }
        slideDurationTimeout(slideDurationSetting);
      }
      if (delta >= scrollSensitivitySetting) {
        //Up scroll
        ticking = true;
        if (currentSlideNumber !== 0) {
          currentSlideNumber--;
        }
        previousItem();
        slideDurationTimeout(slideDurationSetting);
      }
    }
  }

  // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
  function slideDurationTimeout(slideDuration) {
    setTimeout(function() {
      ticking = false;
    }, slideDuration);
  }

  // ------------- ADD EVENT LISTENER ------------- //
  //var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
  //window.addEventListener(mousewheelEvent, () => {parallaxScroll}, false);

  // ------------- SLIDE MOTION ------------- //
  function nextItem() {
    var $previousSlide = $(".background").eq(currentSlideNumber - 1);
    $previousSlide.removeClass("up-scroll").addClass("down-scroll");
  }

  function previousItem() {
    var $currentSlide = $(".background").eq(currentSlideNumber);
    $currentSlide.removeClass("down-scroll").addClass("up-scroll");
  }

  const onWheel = e => {
    //e.preventDefault()
    parallaxScroll(e)
  }

  window.addEventListener('wheel', onWheel);
*/

// OLD HTML
/*
        <BrowserView>
          <section class="background up-scroll">
            <div class="content-wrapper">
              <p class="content-title">Full Page Parallax Effect</p>
              <p class="content-subtitle">Scroll down and up to see the effect!</p>
            </div>
          </section>
          <section class="background">
            <div class="content-wrapper">
              <p class="content-title">Cras lacinia non eros nec semper.</p>
              <p class="content-subtitle">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium.</p>
            </div>
          </section>
          <section class="background">
            <div class="content-wrapper">
              <p class="content-title">Etiam consequat lectus.</p>
              <p class="content-subtitle">Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at nibh aliquam dapibus.</p>
            </div>
          </section>
          <section class="background">
            <div class="content-wrapper">
              <Footer/>
            </div>
          </section>
        </BrowserView>
        <MobileView> 
          <Navbar/>
          <div style={{ textAlign: 'center' }}>
            <CustomParallax 
              image={backgroundImage1}
              type={1}
            />
            <CustomParallax 
              image={backgroundImage2}
              type={1}
            />
            <CustomParallax 
              image={backgroundImage3}
              type={1}
            />
          </div>
          <Footer />
        </MobileView>
*/

export default App;