import React from 'react';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <h1> MEU PORTFÓLIO </h1>
      <nav className='links'>
        <a href='#about'> SOBRE MIM </a>
        <a href='#projects'> PROJETOS </a>
        <a href='#contacts'> CONTATOS </a>
      </nav>
    </div>
  );
}

export default Header;