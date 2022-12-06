import React from 'react';
import './header.css';
import heroImg from '../../assets/hero.png';
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
              <b>
                Are you tired of studying? Do you need to get some rest?
                Would you like better grades?

              </b>
              {' '}
              As a student, doing assignments
              is an inevitable part of your life. Undoubtedly, you
              can forget about all your hobbies and interests and dedicate all your free
              time to writing. However, if academic writing is not your forte, you have
              no time, or you simply possess poor time management skills-welcome
              to
              {' '}
              <b>acewriters254.com.</b>
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
