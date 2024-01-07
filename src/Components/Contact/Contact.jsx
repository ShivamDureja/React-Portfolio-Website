import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tjwmb8a', 'template_6hk1x0r', form.current, 'Mo92v_DldABbpXpaj')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Get To Know More</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>shivamdureja13@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>Linked In</h4>
            <h5>shivam dureja</h5>
            <a href="https://www.linkedin.com/in/shivam-dureja-3ba2b1198/" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder=' Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact