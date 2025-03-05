import React from 'react';
import './Portfolio.css'

import IMG1 from '../../assets/portfolio2.jpg';
import IMG2 from '../../assets/chat-app.png'
import IMG3 from '../../assets/Crypto-img.jpg'
import IMG4 from '../../assets/banking-platform.png'
import IMG5 from '../../assets/kinetic-centar-login.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Github repo for my portfolio website',
        github: 'https://github.com/MiroslavPejic/miki-cv',
        demo: 'https://github.com/MiroslavPejic/miki-cv'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Github chat app',
        github: 'https://github.com/MiroslavPejic/chat-app',
        demo: 'https://github.com/MiroslavPejic/chat-app'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Execify crypto platform',
        github: 'https://github.com/MiroslavPejic/execify-miki',
        demo: 'https://github.com/MiroslavPejic/execify-miki'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Everpay banking app',
        github: 'https://github.com/MiroslavPejic/everpay-miki',
        demo: 'https://github.com/MiroslavPejic/everpay-miki'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Kinetic centar - physiotherapy',
        github: 'https://github.com/MiroslavPejic/kinetic-centar',
        demo: 'https://github.com/MiroslavPejic/kinetic-centar'
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
                                    <img src={image} alt={title} style={{height: '300px', objectFit: 'contain'}}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-btn">
                                    <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}