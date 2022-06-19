import React from 'react';
import './Experience.css'

import {BsPatchCheckFill} from 'react-icons/bs';

import frontEndData from './dataFiles/frontend.json';
import backEndData from './dataFiles/backend.json';

export const Experience = () => {
    return (
        <section id="experience">
          <h5>The Skills I Have</h5>
          <h2>My Experience</h2>

          <div className="container experience__container">
              <div className="experience__frontend">
                <h3>Frontend Development</h3>
                  <div className="experience__content">
                    {
                      frontEndData.data.map(({id, heading, level}) => {
                        return(
                          <article key={id} className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                              <h4>{heading}</h4>
                              <small className="text-light">{level}</small>
                            </div>
                          </article>
                        )
                      })
                    }   
                  </div>
              </div>
              <div className="experience__backend">
                <h3>Backend Development</h3>
                    <div className="experience__content">
                    {
                      backEndData.data.map(({id, heading, level}) => {
                        return(
                          <article key={id} className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                              <h4>{heading}</h4>
                              <small className="text-light">{level}</small>
                            </div>
                          </article>
                        )
                      })
                    }
                    </div>
              </div>
          </div>
        </section>
    )
}