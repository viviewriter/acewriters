import React from 'react';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';
import NavForPages from '../components/nav/NavForPages';

const AboutPage = () => (
  <div id="aboutPage">
    <NavForPages />
    <About />
    <Footer />
  </div>
);

export default AboutPage;
