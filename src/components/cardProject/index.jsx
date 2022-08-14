import React from 'react';
import './cardProject.css';
import propTypes from 'prop-types';

function CardProjects({
  url, src, title, description, language, tools,
}) {
  return (
    <div className='list-projects'>
      <a href={url}>
        <div className='spin'>
          <div className='front'>
            <img src={src} alt={`Gif do projeto ${title}`} />
          </div>
          <div className='back'>
            <article>
              <p id='title-project'>
                <strong>{title}</strong>
              </p>
              <p>
                <strong>Linguagens:</strong>
                {' '}
                {language}
              </p>
              <p>
                <strong>Ferramentas utilizadas:</strong>
                {' '}
                {tools}
              </p>
              <p>
                <strong>Sobre:</strong>
                {' '}
                {description}
              </p>
            </article>
          </div>
        </div>
      </a>
    </div>
  );
}

CardProjects.propTypes = {
  id: propTypes.number,
  url: propTypes.string,
  src: propTypes.string,
  title: propTypes.string,
}.isRequered;

export default CardProjects;
