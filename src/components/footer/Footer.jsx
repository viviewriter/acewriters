/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Socials from '../callToActionBtns/Socials';
import './footer.css';

const Footer = () => (
  <footer>
    <a href="#" className="footer__logo">Ace Writers</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact Us</a></li>
    </ul>

    <Socials />

    <div className="footer__copyright">
      <small>
        &copy; Ace Writers 2022. All rights reserved. Made by
        {' '}
        <a
          href="https://github.com/mosams"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mong&apos;are
        </a>
        {' '}

      </small>
      <div>
        {' '}
        Illustrations from
        {' '}
        <a
          href="https://www.glazestock.com/"
          target="_blank"
          rel="noopener  noreferrer"
        >
          Glazestock
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
