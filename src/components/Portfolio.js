import React from 'react';
import './Portfolio.css';
import project1 from './project1.jpeg';
import project2 from './project2.png';
import project3 from './project3.jpg';
import project4 from './project4.jpg';

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="projects">
        <a href="https://bcamper96.github.io/module-3/">
          <img src={project1} alt="Project 1" className="project-image" />
        </a>
        <a href="https://bcamper96.github.io/module4/">
          <img src={project2} alt="Project 2" className="project-image" />
        </a>
        <a href="https://bcamper96.github.io/module5/">
          <img src={project3} alt="Project 3" className="project-image" />
        </a>
        <a href="https://bcamper96.github.io/module5/">
          <img src={project4} alt="Project 4" className="project-image" />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
