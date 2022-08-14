import React, { useEffect, useState } from 'react';
import CardProjects from '../../components/cardProject';
import backend from '../../db/backend';
import frontend from '../../db/frontend';
import fundamentos from '../../db/fundamentos';
import './projects.css';

function Projects() {
  const [stack, setStack] = useState('frontend');
  const [projects, setProjects] = useState(frontend);

  const getClick = ({ target }) => {
    setStack(target.value);
  };

  useEffect(() => {
    const getProjects = () => {
      if (stack === 'fundamentos') {
        setProjects(fundamentos);
        return;
      }
      if (stack === 'backend') {
        setProjects(backend);
        return;
      }
      setProjects(frontend);
    };
    getProjects();
  }, [stack]);

  return (
    <section className='projects' id='projects'>
      <h1> PROJETOS </h1>
      <div className='projects-stacks'>
        <button
          type='button'
          value='fundamentos'
          id={stack === 'fundamentos' ? 'selected' : ''}
          onClick={(e) => getClick(e)}
        >
          FUNDAMENTOS
        </button>
        <button
          type='button'
          value='frontend'
          id={stack === 'frontend' ? 'selected' : ''}
          onClick={(e) => getClick(e)}
        >
          FRONTEND
        </button>
        <button
          type='button'
          value='backend'
          id={stack === 'backend' ? 'selected' : ''}
          onClick={(e) => getClick(e)}
        >
          BACKEND
        </button>
      </div>
      <div className='projects-list'>
        <div>
          {
          stack && (
            projects.map(({
              id, url, src, title, description, language, tools,
            }) => (
              <CardProjects
                key={id}
                url={url}
                src={src}
                title={title}
                description={description}
                language={language}
                tools={tools}
              />
            ))
          )
            }
          {
              projects.length === 0
              && <p id='soon'>Em breve!</p>
            }
        </div>
      </div>
    </section>
  );
}

export default Projects;
