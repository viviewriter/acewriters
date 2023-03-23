import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import './about.css';
import ME from '../../assets/me-about.png';
import Cta from '../callToActionBtns/Cta';

const About = () => (
  <section id="about">
    <h2>About Us</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Me" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>6+ writing experience</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>5000+ worldwide</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>80,000+ completed</small>
          </article>
        </div>
        <p>
          Our essay writing service is a reliable writing assistant that
          was founded many years ago and maintains an unrivalled
          reputation in the sphere of academic writing. We have hired
          the talented writers who can cope with the most complex
          subjects and topics. Indeed, we are the #1 essay writing
          service for a variety of reasons. First and foremost,
          we guarantee excellent quality and complete support.
          Our writers have graduated from the best universities of
          the USA, the UK, Canada and Australia. They know pretty well
          what modern professors require. They must be sick and tired
          of reading the endless clichéd essays. Thus, if you want to
          impress your professor, place your order at acewriters254.com.
          By ordering a paper from our company, you will not only get
          an informative piece of writing but also improve your writing skills.
        </p>

        <Cta />
      </div>
    </div>
  </section>
);

export default About;
