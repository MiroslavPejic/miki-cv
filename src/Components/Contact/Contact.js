import React from 'react';
import './Contact.css';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ahwwlf2', 'template_w8xp5wh', form.current, 'z-WEW9CNg3WEh2WMc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>miki.pejic@yahoo.co.uk</h5>
                        <a href="mailto:mikipejic@yahoo.co.uk" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>miki.pejic@yahoo.co.uk</h5>
                        <a href="https://m.me/ernest.archiver" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>miki.pejic@yahoo.co.uk</h5>
                        <a href="https://api.whatsapp.com/send?phone=+447793011816" target="_blank">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows="7" placeholder='Your Message' required/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    )
}