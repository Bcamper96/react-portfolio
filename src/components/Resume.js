import React from 'react';
import './Resume.css';
import myResume from './Resume.pdf';

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <button className="resume-button" onClick={() => window.open(myResume, '_blank')}>
        My Resume
      </button>
      <div className="proficiencies-container">
        <p><strong>Front-end Proficiencies</strong></p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>

    </div>
  );
}

export default Resume;
