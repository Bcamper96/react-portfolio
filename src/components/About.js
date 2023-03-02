import React from 'react';
import './About.css';
import myImage from './myImage.jpg';

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img src={myImage} alt="My Image" className="my-image" />
      <div className="about-container">
        <p className="about-paragraph">Web Developer</p>
        <p className="about-paragraph">I am a Miami, FL native and studied at Lynn University in Boca Raton, FL, where I gained valuable experience living in Europe during a semester abroad in Florence, Italy. 
          Currently, I work in inside sales at Century Metals, leveraging my background in investment management to assist clients in achieving their financial goals.</p>
        <p className="about-paragraph">With a desire to shift my career towards the tech industry, I enrolled in a full stack boot camp program. 
          As a former professional in a field I no longer see myself pursuing, 
          I am committed to gaining the skills and knowledge necessary to thrive in this exciting and rapidly-evolving industry.</p>
      </div>
    </div>
  );
}

export default About;
