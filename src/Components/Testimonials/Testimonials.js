import React from 'react';
import './Testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AVR1 from '../../assets/avatar2.jpg';
import AVR2 from '../../assets/avatar3.jpg'

var data = [
    {
        image: AVR1,
        name: 'Peter',
        review: 'Hard working, great teamplayer!'
    },
    {
        image: AVR2,
        name: 'James',
        review: 'Passionate developer!'
    }
]

export const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
            >
                {
                    data.map(({image, name, review}, index) => {
                        return(
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={image} alt="Avatar One" />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}