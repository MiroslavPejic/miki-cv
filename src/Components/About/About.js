import React from 'react';
import './About.css'

import ME from '../../assets/Cyprus_pic.jpg';

import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

export const About = () => {
    return (
        <section id="about">
          <h5>Get To Know</h5>
          <h2>About Me</h2>

          <div className="container about__container">
            <div className="about__me">
              <div className="about__me-image">
                  <img src={ME} alt="About Image" />
              </div>
            </div>
            <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className="about__icon"/>
                  <h5>Experience</h5>
                  <small>6+ Years</small>
                </article>
                <article className="about__card">
                  <FiUsers className="about__icon"/>
                  <h5>Integrations</h5>
                  <small>15+ clients</small>
                </article>
                <article className="about__card">
                  <VscFolderLibrary className="about__icon"/>
                  <h5>Projects</h5>
                  <small>20+ Completed</small>
                </article>
              </div>

              <p>
              I consider myself to be a very forward thinking person who when confronted with a problem thinks of ways to tackle that problem in the best possible way. I am a very outgoing person and will make decisions based on the best interest for everyone I am working with; I greatly enjoy working in a team as I think that this is the best way to produce on our ideas and it is vitally important to have a different perspective which I myself may not have initially. 
              <br/>
              Aside from work and education I very much enjoy spending my free time playing sports and following sports. During my time at TRDP I started organising 5 a side football matches regally for everyone, initially I was sceptical about how much interest there would be but was pleasantly surprised by the amount of interest which was great as it is also very important to bond with my colleagues outside of work, I also help work in the “social committee” at my present employed helping organise staff event like Christmas parties, summer parties and general “get together” of all our staff at various points in the year, I put myself forward for this committee as I very much enjoy organising events such as these.
              <br/>
              I am a massive football fan and I regularly follow my team Leicester City around the country from Newcastle to the south coast!
              </p>

              <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
          </div>
        </section>
    )
}