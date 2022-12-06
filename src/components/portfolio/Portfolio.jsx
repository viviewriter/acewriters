import React from 'react';
import './portfolio.css';
import data from '../../data/dataPortfolio';

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Sample Papers</h2>

      <div className="container portfolio__container">
        {
        data.map(({
          id, description, title,
        }) => (
          <article className="letter" key={id}>
            <h4>{title}</h4>
            <p>
              {description}
            </p>
            <div className="fadeout" />
            <a
              href="#contact"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download full paper
            </a>
          </article>
        ))
      }
      </div>
    </section>
  );
}

export default Portfolio;
