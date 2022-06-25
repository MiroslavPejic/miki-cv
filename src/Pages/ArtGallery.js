import React from 'react';
import { useState, useEffect } from 'react';

import {BrowserView, MobileView} from 'react-device-detect';

import { CustomParallax } from '../Components/CustomParallax.js';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import ReactDOM from 'react-dom';
import $ from 'jquery';

// custom components
import { Footer } from '../Components/Footer.js';

import backgroundImage1 from '../assets/background_image_1.jpg';
import backgroundImage2 from '../assets/background_image_2.jpg';
import backgroundImage3 from '../assets/background_image_3.jpg';

import '../App.scss';


export const ArtGallery = () => {
    // ------------- VARIABLES ------------- //
  var ticking = false;
  var isFirefox = (/Firefox/i.test(navigator.userAgent));
  var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
  var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
  var slideDurationSetting = 600; //Amount of time for which slide is "locked"
  var currentSlideNumber = 0;
  var totalSlideNumber = 3
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

    return( <>
        <BrowserView>
          <section className="background background_1 up-scroll">
            <div className="content-wrapper">
              <p className="content-title">Full Page Parallax Effect</p>
              <p className="content-subtitle">Scroll down and up to see the effect!</p>
            </div>
          </section>
          <section className="background background_2">
            <div className="content-wrapper">
              <p className="content-title">Cras lacinia non eros nec semper.</p>
              <p className="content-subtitle">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium.</p>
            </div>
          </section>
          <section className="background background_3">
            <div className="content-wrapper">
              <p className="content-title">Etiam consequat lectus.</p>
              <p className="content-subtitle">Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at nibh aliquam dapibus.</p>
            </div>
          </section>
        </BrowserView>
        <MobileView> 
          <div style={{ textAlign: 'center' }}>
            <CustomParallax 
              image={backgroundImage1}
              type={1}
              heading={'This is a test heading'}
              summary={'This is some test summary text'}
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
        </MobileView>
     </>
    )
}