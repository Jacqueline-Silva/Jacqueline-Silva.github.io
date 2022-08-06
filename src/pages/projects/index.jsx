import React, { useEffect, useState } from 'react';
import CardProjects from '../../components/cardProject';
import backend from '../../db/backend';
import frontend from '../../db/frontend';
import fundamentos from '../../db/fundamentos';
import './projects.css';

function Projects() {
  const [stack, setStack] = useState('frontend');
  const [projects, setProjects] = useState(frontend);
  console.log(stack);

  const getClick = ({ target }) => {
    setStack(target.value)
  }

  useEffect(() => {
    const getProjects = () => {
      if (stack === 'fundamentos') {
        setProjects(fundamentos)
        return
      } else if (stack === 'backend') {
        setProjects(backend)
        return
      }
      setProjects(frontend)
    }
    getProjects();
  }, [stack])

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
      <div className='list-projects'>
        {
          stack && (
            projects.map(({ id, url, src, title }) => (
                <CardProjects
                  key={ id }
                  url={ url }
                  src={ src } 
                  title={ title }
                />
                ))
              )
        }
      </div>
    </section>
  );
}

export default Projects