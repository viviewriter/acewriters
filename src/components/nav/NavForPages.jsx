/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import Cta from '../callToActionBtns/Cta';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav className="container nav__container">
      <div className="logo__container">
        <Link
          to="#"
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          <h1 className="logoish">Ace Writers</h1>
        </Link>
      </div>
      <ul className="links__list">
        <Link
          to="#"
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          Home
        </Link>
        <Link
          to="#aboutPage"
          onClick={() => setActiveNav('#aboutPage')}
          className={activeNav === '#aboutPage' ? 'active' : ''}
        >
          About
        </Link>
        <Link
          to="/order"
          onClick={() => setActiveNav('#order')}
          className={activeNav === '#order' ? 'active' : ''}
        >
          Contact Us
        </Link>
      </ul>
      <Cta />
    </nav>
  );
}

export default Nav;
