/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaTiktok } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

function Socials() {
  return (
    <div className="socials header_socials">
      <a href="https://www.tiktok.com/@ace_writers_?lang=en"><FaTiktok /></a>
      <a href="https://www.instagram.com/ace_writers_"><FiInstagram /></a>
      <a href="https://api.whatsapp.com/send?phone=+12692866924"><BsWhatsapp /></a>
    </div>
  );
}

export default Socials;
