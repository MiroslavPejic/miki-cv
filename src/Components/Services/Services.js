import React from 'react';
import './Services.css'

import {BiCheck} from 'react-icons/bi';

import servicesData from './dataFiles/services.json';

export const Services = () => {


    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                {
                    servicesData.services.map(({id, heading, data}) => {
                        return(
                            <article key={id} className="service">
                                <div className="service__head">
                                    <h3>{heading}</h3>
                                </div>
                                <ul className="service__list">
                                    {
                                        data.map(({id, title}) => {
                                            return(
                                                <li key={id}>
                                                    <BiCheck className="service__list-icon"/>
                                                    <p>{title}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}