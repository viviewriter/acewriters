import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiInstagramLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fz35ciy', 'template_cje7kuy', form.current, 'DkFlynbzQ5AVWQWNT')
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
            <h5>chegsolutions3@gmail.com</h5>
            <a href="mailto:chegsolutions3@gmail.com" target="_blank" rel="noreferrer">send a message</a>
          </article>
          <article className="contact__option">
            <RiInstagramLine className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Ace Writers</h5>
            <a href="https://www.instagram.com/ace_writers_" target="_blank" rel="noreferrer">send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+1 269 286 6924</h5>
            <a href="https://api.whatsapp.com/send?phone+12692866924" target="_blank" rel="noreferrer">send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input hidden readOnly type="text" value="Ace Writers" name="name" />
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
