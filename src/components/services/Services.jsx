import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => (
  <section id="services" className="services__section">
    <h5>What I offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Service features</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>24/7 Live Support</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>$20 per page</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Timely delivery</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>High quality</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Money-Back Guarantee</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Confidentiality Guarantee</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Plagiarism-free Papers</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Clear Revision Policy</p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Paper features</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Title page</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Double or single spacing</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>275 words per page</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>1 Inch margins</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Times New Roman, 12 pt</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>APA, MLA, Chicago and Havard styles</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Reference page</p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Offers and Perks</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Free Turnitin plagiarism checks</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Free Grammarly report</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Free unlimited revision</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Earn 10% discount when you refer your friends</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>20% discount on first essay</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Get every 10th assignment for free</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;
