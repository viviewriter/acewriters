import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiInstagramLine } from 'react-icons/ri';
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
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>support@acewriters.pro</h5>
            <a href="mailto:support@acewriters.pro" target="_blank" rel="noreferrer">send a message</a>
          </article>
          <article className="contact__option">
            <RiInstagramLine className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Ace Writers</h5>
            <a href="https://www.instagram.com/ace_writers_" target="_blank" rel="noreferrer">send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h5>Incase of any question or enquiry</h5>
          <input hidden readOnly type="text" value="Ace Writers" name="name" />
          <input type="text" name="from_name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Enter your email" required />
          <textarea name="message" rows="7" placeholder="Leave your question or feedback" required />
          <button type="submit" className="btn btn-primary">Place Enquiry</button>
        </form>
      </div>
      <br />
      <br />
      <h4>We exceed your expectation so that you can come and buy from us again.</h4>
    </section>
  );
};

export default Contact;
