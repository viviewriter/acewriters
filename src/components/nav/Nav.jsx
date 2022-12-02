/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './nav.css';
import Cta from '../callToActionBtns/Cta';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav className="container nav__container">
      <div className="logo__container">
        <h1>Ace Writers</h1>
      </div>
      <ul className="links__list">
        <a
          href="#"
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          About
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav('#services')}
          className={activeNav === '#services' ? 'active' : ''}
        >
          Services
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveNav('#portfolio')}
          className={activeNav === '#portfolio' ? 'active' : ''}
        >
          Portfolio
        </a>
        <a
          href="#testimonials"
          onClick={() => setActiveNav('#testimonials')}
          className={activeNav === '#testimonials' ? 'active' : ''}
        >
          Testimonials
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          Contact Us
        </a>
      </ul>
      <Cta />
    </nav>
  );
}

export default Nav;
