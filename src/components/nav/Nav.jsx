/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import './nav.css';

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container container">
          <a href="#" className="nav-logo">
            Ace Writers
          </a>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <a
                href="#"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#testimonials"
                className="nav-links"
                onClick={handleClick}
              >
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <a
            href="mailto:chegsolutions3@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary cta__nav-button"
          >
            Order Now
          </a>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
