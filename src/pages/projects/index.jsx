import React, { useState } from 'react';
import CardProjects from '../../components/cardProject';
import './projects.css';

function Projects() {
  const [stack, setStack] = useState('frontend');
  console.log(stack);

  const getClick = ({ target }) => {
    setStack(target.value)
  }

  return (
    <section className='projects' id='projects'>
      <h1> PROJETOS </h1>
      <div className='projects-stacks'>
        <button
          type='button'
          value='fundamentos'
          onClick={ (e) => getClick(e) }>
          FUNDAMENTOS
        </button>
        <button
          type='button'
          value='frontend'
          onClick={ (e) => getClick(e) }>
          FRONTEND
        </button>
        <button
          type='button'
          value='backend'
          onClick={ (e) => getClick(e) }>
          BACKEND
        </button>
      </div>
      {
        stack && <CardProjects stackSelected={stack} />
      }
    </section>
  );
}

export default Projects