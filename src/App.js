import React from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './App.css';
import githubImage from './githubImage.png';
import linkedinImage from './linkedin.png';

function App() {
  const [currentPage, setCurrentPage] = React.useState('About');

  const handleClick = (page) => {
    setCurrentPage(page);
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  }

  return (
    <div>
      <header>
        <h1>Brian Campero</h1>
        <nav>
          <button onClick={() => handleClick('About')}>About</button>
          <button onClick={() => handleClick('Portfolio')}>Portfolio</button>
          <button onClick={() => handleClick('Contact')}>Contact</button>
          <button onClick={() => handleClick('Resume')}>Resume</button>
        </nav>
      </header>
      <div className="content">
        {renderPage()}
      </div>
      <footer>
        <a href="https://github.com/Bcamper96"><img src={githubImage} alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/brian-campero-904214177">
          <img src={linkedinImage} alt="LinkedIn" className="linkedin-image" />
        </a>
      </footer>
    </div>
  );
}

export default App;
