import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ua7gsv', 'template_p5f5ehc', form.current, 'pZ9pl1IiGmIcTva4d')
      .then((result) => result.text, (error) => error.text);

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dummy@mail.com</h5>
            <a href="mailto:dummy@mail.com" target="_blank" rel="noreferrer">send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>mongare</h5>
            <a href="facebook/profile" target="_blank" rel="noreferrer">send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+254762992818</h5>
            <a href="https://api.whatsapp.com/send?phone=+254704381982" target="_blank" rel="noreferrer">send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input hidden readOnly type="text" value="Sam" name="name" />
          <input type="text" name="from_name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Enter your email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
      <br />
      <br />
      <h5>We exceed your expectations so that you can come back and buy from us again.</h5>
    </section>
  );
};

export default Contact;
