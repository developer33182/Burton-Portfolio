import React from 'react';
import '../Styles/Portfolio.css'; // Style file for this component

function Portfolio() {
  const projects = [
    {
      title: 'FrontlineDB',
      description: 'A WWII database site showcasing tanks, aircraft, and naval vessels.',
      link: '/projects/frontlinedb'
    },
    {
      title: 'Pokédex 2',
      description: 'An immersive Pokédex with cherry blossom aesthetics and smooth modals.',
      link: '/projects/pokedex2'
    },
    {
      title: 'North Shore Connect',
      description: 'A local social network for Louisiana communities.',
      link: '/projects/northshore'
    }
  ];

  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <p>Welcome to my portfolio page. Here you can find my projects and work samples.</p>
      

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
