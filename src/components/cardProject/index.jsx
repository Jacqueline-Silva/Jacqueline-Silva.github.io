import React, { useEffect, useState } from 'react';
import './cardProject.css';
import todolist from './img/todo-list.gif'
import propTypes from 'prop-types'

/**
 * PRIORIDADES PARA DESENVOLVER:
 * -> banco de dados para armazenar projetos
 * -> responsividade
 */

function CardProjects({ stack }) {
  const [stackSelected, setStackSelected] = useState('frontend')

  useEffect(() => {
    const getStack = () => {
      setStackSelected(stack);
    }
    getStack()
  }, [stackSelected])

  const EXEMPLO = [
    {
      'id': 1,
      'url': 'https://github.com/Jacqueline-Silva/todo-list',
      'src': todolist,
      'title': 'title'
    },
    {
      'id': 2,
      'url': 'jacqueline-silva.github.io/pixels-art/',
      'src': todolist,
      'title': 'title'
    }
  ]

  return (
    <div className='list-projects'>
      {
        EXEMPLO.map(({ id, url, src, title }) => (
          <a href={url} key={ id } to>
            <section > 
              <img src={src} alt={`Gif do projeto ${title}`} />
            </section>
          </a>
        ))
      }
    </div>
  );
}

CardProjects.propTypes = {
  stack: propTypes.string,
}.isRequered;

export default CardProjects;