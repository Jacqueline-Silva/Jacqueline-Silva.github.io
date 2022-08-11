import React from 'react';
import './cardProject.css';
import propTypes from 'prop-types';

function CardProjects({ url, src, title }) {
  return (
    <div className='list-projects'>
      <a href={url}>
        <section>
          <img src={src} alt={`Gif do projeto ${title}`} />
        </section>
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
