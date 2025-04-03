import React from 'react';
import './header.css';
import heroImg from '../../assets/hero.jpeg';
import Cta from '../callToActionBtns/Cta';
import Socials from './HeaderSocials';

function Header() {
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__text-content">
          <div className="header__page-heading">
            <h1>
              Welcome to ACEWRITERS. We provide excellent custom writing services at only
              {' '}
              <b className="price">$20</b>
              {' '}
              per page
            </h1>
            <p>
              <b>A grades guaranteed. </b>
              {' '}
              We handle online classes, essays, statistics, programming, and so much more...
              -Don&apos;t stress when you can relax.
              {' '}
              <b>acewriters got you!!!</b>
            </p>
            <div className="cta__partition">
              <Cta />
            </div>
          </div>
        </div>
        <div className="image__partition">
          <div className="">
            <img
              src={heroImg}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <Socials />
    </section>
  );
}

export default Header;
