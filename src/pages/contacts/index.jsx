import React from 'react';
import './contacts.css';
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinLine } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

function Contacts() {
  return (
    <div className='contacts' id='contacts'>
      <h1> CONTATOS </h1>
      <ul className='contacts-links'>
        <a href='https://github.com/Jacqueline-Silva'>
          <li>
            <FiGithub className='icons' />
            <p>GITHUB</p>
          </li>
        </a>
        <a href='https://www.linkedin.com/in/jacqueline-sxds/'>
          <li>
            <RiLinkedinLine className='icons' />
            <p>LINKEDIN</p>
          </li>
        </a>
        <a href='mailto:jacque.sx@hotmail.com'>
          <li>
            <MdAlternateEmail className='icons' />
            <p>EMAIL</p>
          </li>
        </a>
        <a href='http://wa.me/5511946162157'>
          <li>
            <FaWhatsapp className='icons' />
            <p>WHATSAPP</p>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Contacts;
