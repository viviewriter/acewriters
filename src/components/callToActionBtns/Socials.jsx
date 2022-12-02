/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

function Socials() {
  return (
    <div className="socials">
      <a href="https://facebook.com"><FaFacebookF /></a>
      <a href="https://instagram.com"><FiInstagram /></a>
      <a href="https://twitter.com"><IoLogoTwitter /></a>
    </div>
  );
}

export default Socials;
