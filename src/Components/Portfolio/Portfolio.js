import React from 'react';
import './Portfolio.css'

import IMG1 from '../../assets/portfolio2.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Github repo for my portfolio website',
        github: 'https://github.com/MiroslavPejic/miki-cv',
        demo: 'https://github.com/MiroslavPejic/miki-cv'
    }
]

export const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return(
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-btn">
                                    <a href={github} className="btn" target="_blank">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_blank">Github</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}