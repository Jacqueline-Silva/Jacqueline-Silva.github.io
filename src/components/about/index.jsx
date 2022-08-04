import React from 'react';
import './about.css';

function About() {
  return (
    <section className='about' id='about'>
      <section className='about__img'>
        <img src='https://c.tenor.com/cQKQVxNUQJkAAAAd/jennie-blackpink-jennie.gif' alt=''></img>
      </section>
      <article className='about__txt'>
        <h1> SOBRE MIM </h1>
        <p>
          Olá, eu me chamo Jacqueline, tenho 26 anos e nasci em São Paulo, SP.
        </p>
        <p>
          Sempre fui uma pessoa apaixonada por aprender e desde pequena adorava acordar cedo para ir à escola estudar.
          <br />
          Há quem pense: `Essa menina não é normal!`, mas sim, eu ainda adoro acordar cedo e aprender algo novo.
        </p>
        <p>
          Foi assim que cheguei na área de tecnologia, onde sempre e a todo momento tem coisas novas para se aprender.
          Você pisca e surgi algo novo, uma tecnologia nova, uma ferramenta, frameworks, libs... é uma infinidade de conhecimentos.
          E ainda estou beeem longe de conhecer 1/3 do que já existe atualmente. É estimulante!
        </p>
        <p> Conhecimento é poder, não?! </p>
      </article>
    </section>
  );
}

export default About;
