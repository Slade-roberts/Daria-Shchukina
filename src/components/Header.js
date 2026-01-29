import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <h1>Daria Shchukina</h1>
      <nav>
        <button onClick={() => scrollToSection('home')}>Home</button>
        <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
